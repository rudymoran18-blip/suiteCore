import { Component } from '@angular/core';
import { HotelResponse } from '../../../interfaces/hotel.interface';
import { NgForm } from '@angular/forms';
import { HotelService } from '../../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/toast.service';

@Component({
  selector: 'app-form-hotel',
  standalone: false,
  templateUrl: './form-hotel.html',
  styleUrl: './form-hotel.css',
})
export class FormHotel {
  id: number = 0;
  esNuevo: boolean = true;
  hotel:HotelResponse = {
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
    estado: ''
  };

  constructor(private hotelService: HotelService,
              private router: Router,
              private route: ActivatedRoute,
              private alertService: AlertService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.esNuevo = this.id === 0;
      if (!this.esNuevo) {
        this.getHotel();
      }
    });

  }

  getHotel(): void {
    this.hotelService.getHotelById(this.id).subscribe({
      next: (data) => {
        this.hotel = data.hotel;
        console.log('Datos del hotel obtenido:', this.hotel);
      },
      error: (err) => console.error(err, console.log('Error al obtener los datos del hotel')),
    });
  }

  onSubmit(formHotel:NgForm): void {
    console.log('Formulario enviado:', this.hotel);
    console.log('Formulario Enviado', formHotel);
    if (formHotel.invalid) {
      console.log('Formulario no válido');
      return;
    }

    if (this.esNuevo) {
      this.hotelService.createHotel(this.hotel).subscribe({
        next: (data) => {
          console.log('Hotel creado:', data);
          this.alertService.exito('Hotel Creado', data.message || 'El hotel ha sido creado exitosamente');
          this.router.navigate(['/hoteles']);
        },
        error: (err) => console.error(err, console.log('Error al crear el hotel')),
      });
    } else {
      this.hotelService.updateHotel(this.id, this.hotel).subscribe({
        next: (data) => {
          console.log('Hotel actualizado:', data);
          this.alertService.exito('Hotel Actualizado', data.message || 'El hotel ha sido actualizado exitosamente');
          this.router.navigate(['/hoteles']);
        },
        error: (err) => console.error(err, console.log('Error al actualizar el hotel')),
      });
    }
  }
}
