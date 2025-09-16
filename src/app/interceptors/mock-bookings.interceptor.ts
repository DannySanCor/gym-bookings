import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { Booking } from '../models/booking';

// In-memory mock dataset for GET /bookings
const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bkg-1',
    title: 'Yoga',
    instructor: 'Laura',
    capacity: 10,
    reserved: 3,
    datetime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    description: 'Clase de yoga para todos los niveles.',
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1600&auto=format&fit=crop',
    level: 'Intermedio',
    durationMinutes: 45
  },
  {
    id: 'bkg-2',
    title: 'Crossfit',
    instructor: 'Marcos',
    capacity: 12,
    reserved: 8,
    datetime: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    description: 'Entrenamiento funcional de alta intensidad.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
    level: 'Avanzado',
    durationMinutes: 60
  },
  {
    id: 'bkg-3',
    title: 'Spinning',
    instructor: 'Carla',
    capacity: 15,
    reserved: 10,
    datetime: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(),
    description: 'Sesión de ciclismo indoor con música.',
  imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
    level: 'Todos',
    durationMinutes: 45
  }
];

const NETWORK_DELAY_MS = 400;

export const mockBookingsInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // Only handle GET /bookings
  if (req.method === 'GET' && new URL(req.url, 'http://local').pathname === '/bookings') {
    const response = new HttpResponse({ status: 200, body: MOCK_BOOKINGS });
    return of(response).pipe(delay(NETWORK_DELAY_MS));
  }

  return next(req);
};


