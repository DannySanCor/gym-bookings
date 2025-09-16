import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.scss'
})
export class BookingDetailComponent implements OnInit {
  @Input() booking: Booking | null = null;
  @Input() showHeader: boolean = true;
  @Output() booked = new EventEmitter<Booking>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    if (!this.booking) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.bookingsService.getBookings().subscribe(bookings => {
          this.booking = bookings.find(b => b.id === id) || null;
        });
      }
    }
  }

  reserve(): void {
    if (!this.booking) return;
    // Navegar a pantalla de confirmación
    this.router.navigate(['/booking', this.booking.id, 'confirm']);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
