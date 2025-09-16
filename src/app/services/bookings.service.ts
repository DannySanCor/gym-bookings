import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { Booking, BookingId } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private readonly baseUrl = '/bookings';
  private bookings$ = new BehaviorSubject<Booking[] | null>(null);

  constructor(private readonly http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    // Siempre recarga los datos del mock API al llamar
    this.http.get<Booking[]>(this.baseUrl).subscribe(list => this.bookings$.next(list));
    return this.bookings$.asObservable().pipe(map(list => list ?? []));
  }

  getBookingById(id: BookingId): Observable<Booking | undefined> {
    return this.getBookings().pipe(map(list => list.find(b => b.id === id)));
  }

  reserveBooking(id: BookingId): void {
    const list = this.bookings$.value;
    if (!list) return;
    const idx = list.findIndex(b => b.id === id);
    if (idx >= 0 && list[idx].reserved < list[idx].capacity) {
      // Inmutable update
      const updated = [...list];
      updated[idx] = { ...updated[idx], reserved: updated[idx].reserved + 1 };
      this.bookings$.next(updated);
    }
  }
}
