# Reservas Gym – Prueba Técnica Frontend

Aplicación Angular para la gestión de reservas de clases en un gimnasio. Permite visualizar clases disponibles, ver detalles, reservar plazas y obtener confirmación, todo con diseño responsivo y buenas prácticas de arquitectura.

## Instalación

```bash
git clone https://github.com/DannySanCor/gym-bookings
cd gym-bookings
npm install
npx ng serve --open
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## Uso

1. Visualiza las clases disponibles en la pantalla principal.
2. Haz clic en "Ver más" para ver el detalle de una clase.
3. Haz clic en "Reservar" para seleccionar plazas y confirmar tu reserva.
4. Recibe un recibo visual tras confirmar.

## Estructura de componentes

- **AppComponent**: Estructura general y layout.
- **BookingListComponent**: Lista de reservas disponibles.
- **BookingDetailComponent**: Detalle de la reserva seleccionada.
- **BookingConfirmComponent**: Confirmación y selección de plazas.
- **BookingSuccessComponent**: Pantalla de éxito/recibo.

## Comunicación entre componentes

- Se utiliza Angular Router para navegación y parámetros de URL.
- El estado de las reservas se gestiona con un servicio singleton (`BookingsService`) y observables, permitiendo comunicación reactiva y escalable entre componentes.

## Nota sobre la comunicación entre componentes

> En vez de usar únicamente `@Input` y `@Output` para la comunicación entre componentes, se eligió implementar la navegación y el traspaso de datos mediante rutas y un servicio singleton con observables. Esta decisión responde a que es una solución más robusta, escalable y profesional en aplicaciones Angular modernas, permitiendo desacoplar vistas, mejorar la experiencia de usuario y facilitar el mantenimiento del código.

## Mock de API

- El endpoint `/bookings` es simulado mediante un interceptor HTTP.
- Los datos se mantienen en memoria y se actualizan al reservar.

## Buenas prácticas

- Sin librerías UI externas.
- SCSS modular y responsivo.
- Código tipado y estructurado.
- Navegación y estado desacoplados.

## Capturas de pantalla

Puedes agregar aquí imágenes del flujo principal de la app para ilustrar la experiencia de usuario.

## Decisiones técnicas

- Se eligió Angular Router para navegación y desacoplamiento de vistas.
- El estado de reservas se maneja con un BehaviorSubject para simular una API reactiva.
- El diseño se realizó con SCSS puro, sin frameworks externos, para cumplir el requerimiento de la prueba.

---

Desarrollado para la prueba técnica Frontend Developer.
