import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-component',
  standalone: false,
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent implements OnInit, OnDestroy {
  isSidebarOpen: boolean = false;
  private sidebarSub!: Subscription;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // Escuchamos en tiempo real si se abrió o cerró el menú
    this.sidebarSub = this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }

  // Método para el botón de cerrar (X)
  onCloseMenu(): void {
    this.sidebarService.closeSidebar();
  }

  ngOnDestroy(): void {
    if (this.sidebarSub) {
      this.sidebarSub.unsubscribe();
    }
  }
}

