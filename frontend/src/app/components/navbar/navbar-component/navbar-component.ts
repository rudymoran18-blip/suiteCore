import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-navbar-component',
  standalone: false,
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  onToggleMenu(): void {
    this.sidebarService.toggleSidebar();
  }

}
