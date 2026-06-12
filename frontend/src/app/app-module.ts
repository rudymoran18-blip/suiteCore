import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HotelComponent } from './pages/hotel/hotel-component/hotel-component';
import { HabitacionesComponent } from './pages/habitacion/habitaciones-component/habitaciones-component';
import { FooterComponent } from './components/footer/footer-component/footer-component';
import { SidebarComponent } from './components/sidebar/sidebar-component/sidebar-component';
import { HomeComponent } from './components/home/home-component/home-component';
import { FormHotel } from './pages/hotel/form-hotel/form-hotel';
import { NavbarComponent } from './components/navbar/navbar-component/navbar-component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormHabitaciones } from './pages/habitacion/form-habitaciones/form-habitaciones';


@NgModule({
  declarations: [
    App,
    HotelComponent,
    HabitacionesComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    FormHotel,
    NavbarComponent,
    FormHabitaciones
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
