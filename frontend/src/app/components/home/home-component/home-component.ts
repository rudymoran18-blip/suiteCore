import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/toast.service';
import { Hotel } from '../../../interfaces/hotel.interface';
import { HabitacioneService } from '../../../services/habitaciones.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  lstHoteles: Hotel[] = [];
  hoteles: Hotel[] = [];
  lstHabitaciones: any = [];

  hotelesActivos: number = 0;
  hotelesDisponibles: number = 0;
  hotelesInactivos: number = 0;


  //  Variables de control añadidas para el estado del Modal
  isModalOpen: boolean = false;
  hotelSeleccionado: Hotel | null = null;

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private alertService: AlertService,
    private habitacionService:HabitacioneService
  ) {}

  ngOnInit(): void {
    this.getHoteles();
    this.getHabitaciones();
  }

  getHoteles(): void {
    this.hotelService.getHoteles().subscribe({
      next: (data) => {
        this.hoteles = data.hoteles;
        // Filtrar activos primero y luego tomar una muestra limpia
        this.lstHoteles = this.hoteles.filter(h => h.estado === 'Activo').slice(0, 4);
        this.calcularEstadisticasHoteles();
      },
      error: (err) => {
        console.error('Error al obtener los hoteles:', err);
      }
    });
  }

  getHabitaciones(){
    this.habitacionService.getHabitaciones().subscribe({
      next:(res)=>{
        console.log('Habitaciones:', res.habitaciones);
        this.lstHabitaciones = res.habitaciones.slice(0,4)
      },
      error:(err) =>{
        console.log('Error al obtener las habitaciones', err.message);
      },
    })

  }

  calcularEstadisticasHoteles(): void {
    this.hotelesDisponibles = this.hoteles.length;
    this.hotelesActivos = this.hoteles.filter(hotel => hotel.estado === 'Activo').length;
    this.hotelesInactivos = this.hoteles.filter(hotel => hotel.estado === 'Inactivo').length;
  }


  crearHotel(): void {
    this.router.navigate(['hoteles/form/', 0]);
  }

  editarHotel(id: number): void {
    this.router.navigate(['hoteles/form/', id]);
  }

  //  NUEVO: Disparador que recibe el hotel e inyecta el modal al DOM
  verDetalleHotel(hotel: Hotel): void {
    this.hotelSeleccionado = { ...hotel }; // Copia superficial segura
    this.isModalOpen = true;
  }

  //  NUEVO: Resetea el control del modal
  cerrarModal(): void {
    this.isModalOpen = false;
    this.hotelSeleccionado = null;
  }
}
