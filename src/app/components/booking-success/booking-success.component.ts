import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../../models/booking';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-success.component.html',
  styleUrl: './booking-success.component.scss'
})
export class BookingSuccessComponent implements OnInit {
  @Input() booking: Booking | null = null;
  bookingId = 'R-98421';
  totalPaid = 9.00;

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

  goBack(): void {
    this.router.navigate(['/']);
  }
}
