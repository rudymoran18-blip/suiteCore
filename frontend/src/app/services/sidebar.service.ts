import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class SidebarService {
  // Por defecto, el sidebar inicia cerrado en móviles (false)
  private sidebarOpen = new BehaviorSubject<boolean>(false);

  // Exponemos el estado como un Observable
  sidebarState$ = this.sidebarOpen.asObservable();

  // Método para alternar (abrir/cerrar)
  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }

  // Método para forzar el cierre
  closeSidebar() {
    this.sidebarOpen.next(false);
  }
}
