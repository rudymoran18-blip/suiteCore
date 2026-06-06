import { Component } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Hotel } from '../../../interfaces/hotel.interface';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/toast.service';

@Component({
  selector: 'app-hotel-component',
  standalone: false,
  templateUrl: './hotel-component.html',
  styleUrl: './hotel-component.css',
})
export class HotelComponent {


  lstHoteles: Hotel[] = [];

  constructor(private hotelService: HotelService,
              private router: Router,
              private alertService: AlertService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHoteles();
  }



  getHoteles(){
    this.hotelService.getHoteles().subscribe({
      next: (data) => {
        this.lstHoteles = data.hoteles;
      },
      error: (err) => console.error(err, console.log('Error al obtener los datos')),
    });
  }


  editarHotel(id: number  | undefined ):void{
    console.log('Editar hotel con ID:', id);
    if(id===0){
      this.router.navigate(['/form', 0]);
      return;
    }
    this.router.navigate(['/form', id]);
  }

  eliminarHotel(id: number):void{
    console.log('Eliminar hotel con ID:', id);
    // Aquí puedes agregar la lógica para eliminar el hotel, como mostrar una confirmación y luego llamar al servicio de eliminación
    this.alertService.confirmarEliminacion().then((result) => {
      if (result.isConfirmed) {
        this.hotelService.deleteHotel(id).subscribe({
          next: (data) => {
            console.log('Hotel eliminado:', data);
            this.alertService.exito('Hotel Eliminado', data.message || 'El hotel ha sido eliminado exitosamente');
            this.getHoteles(); // Refrescar la lista después de eliminar
          },
          error: (err) => console.error(err, console.log('Error al eliminar el hotel')),
        });
      }
    });
  }

}
