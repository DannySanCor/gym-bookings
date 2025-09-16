import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Booking } from './models/booking';

import { RouterModule } from '@angular/router';
// ...existing code...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gym-bookings';
  selected: Booking | null = null;
  currentView: 'list' | 'detail' | 'confirm' | 'success' = 'list';

  onSelected(booking: Booking) {
    this.selected = booking;
    this.currentView = 'detail';
  }

  onBooked(booking: Booking) {
    if (!booking) return;
    this.selected = booking;
    this.currentView = 'confirm';
  }

  onConfirmed(booking: Booking) {
    if (!booking) return;
    this.selected = booking;
    this.currentView = 'success';
  }

  onCancelled() {
    this.currentView = 'detail';
  }

  onBackToList() {
    this.selected = null;
    this.currentView = 'list';
  }
}
