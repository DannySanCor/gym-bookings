// Domain models for gym class bookings

export interface Booking {
  id: string;
  title: string;
  instructor: string;
  capacity: number;
  reserved: number;
  datetime: string; // ISO string for simplicity
  description?: string;
  imageUrl?: string;
  level?: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos';
  durationMinutes?: number;
}

export interface BookingSummary {
  id: string;
  title: string;
  instructor: string;
  capacity: number;
  reserved: number;
}

export type BookingId = string;


