
import { Routes } from '@angular/router';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { BookingConfirmComponent } from './components/booking-confirm/booking-confirm.component';
import { BookingSuccessComponent } from './components/booking-success/booking-success.component';

export const routes: Routes = [
	{ path: '', component: BookingListComponent },
	{ path: 'booking/:id', component: BookingDetailComponent },
	{ path: 'booking/:id/confirm', component: BookingConfirmComponent },
	{ path: 'booking/:id/success', component: BookingSuccessComponent },
	{ path: '**', redirectTo: '' }
];
