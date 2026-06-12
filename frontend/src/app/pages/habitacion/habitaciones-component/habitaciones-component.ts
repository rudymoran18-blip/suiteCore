import { Component } from '@angular/core';
import { HabitacioneService } from '../../../services/habitaciones.service';
import { AlertService } from '../../../services/toast.service';
import { Router } from '@angular/router';
import { Habitacion } from '../../../interfaces/habitacion.interface';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-habitaciones-component',
  standalone: false,
  templateUrl: './habitaciones-component.html',
  styleUrl: './habitaciones-component.css',
})
export class HabitacionesComponent {

  lstHabitaciones:Habitacion [] =[]

  constructor(private habitacionesService:HabitacioneService,
             private router:Router,
              private alertService:AlertService,
             private hotelService:HotelService
  ) {  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHabitaciones();
  }


  getHabitaciones(){
    this.habitacionesService.getHabitaciones().subscribe({
      next:(res)=>{
        console.log('Data obtenida', res.habitaciones);
        this.lstHabitaciones = res.habitaciones
      },
      error(err) {
        console.log('Error al obtener las habitaciones', err.message);
      },
    })
  }

  // getHoteles(){
  //   this.hotelService.getHoteles().subscribe({
  //     next:(res)=>{
  //       console.log('Datos obtenidos', res.hoteles);

  //     },
  //     error:(err)=>{
  //       console.log('Erro obtener los datos', err.message);
  //     }
  //   })
  // }

  editarHabitacion(id:number){
    this.router.navigate(['habitaciones/form', id])
  }

  eliminarHabitacion(id:number){
    console.log('Habitación eliminada', id);
    this.alertService.confirmarEliminacion().then((result) => {
      if (result.isConfirmed) {
        this.habitacionesService.deleteHabitacion(id).subscribe({
          next: (data) => {
            console.log('Hotel eliminado:', data);
            this.alertService.exito('Hotel Eliminado', data.message || 'La habitación ha sido eliminada exitosamente');
            this.getHabitaciones(); // Refrescar la lista después de eliminar
          },
          error: (err) => console.error(err, console.log('Error al eliminar el hotel')),
        });
      }
    });
  }
}
