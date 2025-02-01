import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, viewChild } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { NavigateController } from '../../../shared/controllers/navigate.controller';
import { AuthService } from '../../../core/services/auth.service';



interface User {
  name: string;
  email: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, AvatarModule, MenuModule, ButtonModule, ProgressBarModule, LucideAngularModule, OverlayPanelModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  menu = viewChild('menu');
  readonly star = Star;
  authService = inject(AuthService)
  navigateController = inject(NavigateController);
  @Input() user!: User;

  menuItems: MenuItem[] = [
    {
        label: 'Profile',
        command: () => this.navigateToProfile(),
        badge: '⇧⌘P',
        badgeStyleClass: 'text-xs text-gray-500'
    },
    {
        label: 'Settings',
        command: () => this.navigateToSettings(),
        badge: '⌘S',
        badgeStyleClass: 'text-xs text-gray-500'
    },
    {
        label: 'Projects',
        command: () => this.navigateToProjects(),
        badge: '⌘B',
        badgeStyleClass: 'text-xs text-gray-500'
    },
    {
        separator: true,
        styleClass: 'my-2 border-t border-gray-200'
    },
    {
        label: 'Log out',
        command: () => this.logout(),
        styleClass: 'text-red-600',
        badge: '⇧⌘Q',
        badgeStyleClass: 'text-xs text-red-600'
    }
  ];

  navigateToProfile() {
    // Implement navigation logic
    this.navigateController.navigateToProfile();
  }

  navigateToSettings() {
    // Implement navigation logic
  }

  navigateToProjects() {
    // Implement navigation logic
  }

  logout() {
    // Implement logout logic
    this.authService.logout();
  }
}
