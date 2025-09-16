import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent implements OnInit {
  bookings$!: Observable<Booking[]>;

  constructor(private readonly bookingsService: BookingsService) {}

  ngOnInit(): void {
    this.bookings$ = this.bookingsService.getBookings();
  }
}
