import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home-component/home-component';
import { HotelComponent } from './pages/hotel/hotel-component/hotel-component';
import { HabitacionesComponent } from './pages/habitacion/habitaciones-component/habitaciones-component';
import { FormHotel } from './pages/hotel/form-hotel/form-hotel';
import { FormHabitaciones } from './pages/habitacion/form-habitaciones/form-habitaciones';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hoteles', component: HotelComponent},
  {path: 'hoteles/form/:id', component: FormHotel},
  {path: 'habitaciones', component: HabitacionesComponent},
  { path: 'habitaciones/form/:id', component: FormHabitaciones },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
