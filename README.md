# Gym Bookings – Prueba Técnica Frontend

Aplicación Angular para un sistema de reservas de turnos de gimnasio.

## Requisitos

- Node.js 18+
- Angular CLI (se usa vía `npx`)

## Instalación

```bash
npm install
```

## Ejecución

```bash
npx ng serve --open
```
Abrirá `http://localhost:4200/`.

## Estructura de componentes

- `AppComponent`: estructura general y layout.
- `BookingListComponent`: lista de reservas disponibles.
- `BookingDetailComponent`: detalle de la reserva seleccionada.

## Comunicación entre componentes

La comunicación se implementa usando `@Output` en `BookingListComponent` para emitir la reserva seleccionada hacia el componente contenedor (`AppComponent`), que a su vez pasa la selección como `@Input` a `BookingDetailComponent`. Alternativamente, puede usarse un `Subject` en un servicio para desacoplar la selección.

## Consumo de datos

`BookingsService` expone un observable que simula `GET /bookings` (mock local o interceptor). `BookingListComponent` se subscribe para renderizar tarjetas, y al seleccionar una, se emite al contenedor.


## Git 
