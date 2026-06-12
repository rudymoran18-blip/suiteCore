import { Component, OnInit } from '@angular/core';
import { HabitacioneService } from '../../../services/habitaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/toast.service';
import { Habitacion, habitacionRes } from '../../../interfaces/habitacion.interface';
import { Hotel } from '../../../interfaces/hotel.interface';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-form-habitaciones',
  standalone: false,
  templateUrl: './form-habitaciones.html',
  styleUrl: './form-habitaciones.css',
})
export class FormHabitaciones implements OnInit {
  id: number = 0;
  esNuevo: boolean = false;
  isLoading: boolean = false;

  // Inicializamos de forma correcta para que conviva perfectamente con los inputs y placeholders
  habitacion: any = {
    hotelId: null,      // null permite que se preseleccione el placeholder "Selecciona una sede..."
    numero: '',         // Como string para soportar letras si se requiere (ej: 101-A)
    tipo: '',
    precioNoche: '',    // Como string o vacío para manejar el formateo decimal limpio
    capacidad: null,    // null para que no aparezca un '0' estorbando en el input numérico
    estado: ''
  };

  lstHotel: Hotel[] = [];

  constructor(
    private habitacionService: HabitacioneService,
    private hotelService: HotelService,
    private router: Router,
    private alertService: AlertService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarHoteles();

    // Flujo reactivo con paramMap recomendado para entornos reales
    this.activeRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.esNuevo = this.id === 0;

      if (!this.esNuevo) {
        this.getHabitacion();
      }
    });
  }

  cargarHoteles(): void {
    this.hotelService.getHoteles().subscribe({
      next: (res: any) => {
        this.lstHotel = res.hoteles || [];
      },
      error: (err: any) => {
        console.error('Error al cargar la lista de hoteles sedes.', err.message);
        this.alertService.error('Error', 'No se pudieron cargar los hoteles para la asignación.');
      }
    });
  }

  getHabitacion(): void {
    this.habitacionService.getHabitacionesById(this.id).subscribe({
      next: (res) => {
        console.log('Habitación Obtenida desde Backend:', res.habitacion);
        //  Seteamos la respuesta directamente. Al venir con la misma estructura camelCase
        // desde tu consulta individual, rellenará los inputs automáticamente.
        this.habitacion = res.habitacion;
      },
      error: (err) => {
        console.error('Error al obtener la habitación', err.message);
        this.alertService.error('Error', 'No se pudo recuperar la información de la habitación.');
        this.regresar();
      }
    });
  }

  onSubmit(form: any): void {
    if (form.invalid) return;

    this.isLoading = true;

    if (this.esNuevo) {
      this.habitacionService.createHabitacion(this.habitacion).subscribe({
        next: (res) => {
          this.isLoading = false;
          // Captura el mensaje directo que configuraste en tu backend res.status(201).json
          this.alertService.exito('Registro Exitoso', res.message || 'Habitación creada correctamente');
          this.regresar();
        },
        error: (err) => {
          this.isLoading = false;
          // Muestra el mensaje exacto que manda tu controlador en los bloques de error (res.status(400))
          this.alertService.error('Error al guardar', err.error?.message || 'Error interno al procesar.');
        }
      });
    } else {
      this.habitacionService.updateHabitacion(this.id, this.habitacion).subscribe({
        next: (res) => {
          this.isLoading = false;
          // Corregido el mensaje para reflejar la edición real del dormitorio
          this.alertService.exito('Registro Actualizado', res.message || 'Habitación modificada correctamente');
          this.regresar();
        },
        error: (err) => {
          this.isLoading = false;
          this.alertService.error('Error al actualizar', err.error?.message || 'Error interno al actualizar.');
        }
      });
    }
  }

  regresar(): void {
    this.router.navigate(['/habitaciones']);
  }
}
