import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../../models/booking';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking-confirm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-confirm.component.html',
  styleUrl: './booking-confirm.component.scss'
})
export class BookingConfirmComponent {
  @Input() booking: Booking | null = null;
  spots = 1;
  paymentMethod = 'card';
  notes = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    if (!this.booking) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.bookingsService.getBookingById(id).subscribe(b => {
          this.booking = b || null;
        });
      }
    }
  }

  confirm(): void {
    if (!this.booking) return;
    // Simular reserva: actualizar cupos en el servicio
    this.bookingsService.reserveBooking(this.booking.id);
    this.router.navigate(['/booking', this.booking.id, 'success']);
  }

  cancel(): void {
    if (!this.booking) return;
    this.router.navigate(['/booking', this.booking.id]);
  }
}
