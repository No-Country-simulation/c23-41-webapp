import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Bell, LucideAngularModule } from 'lucide-angular';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { NotificationsService } from './service/notification.service';
import { AvatarModule } from 'primeng/avatar';

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'comment' | 'like' | 'mention' | 'follow' | 'achievement' | 'course';
  user?: {
    name: string;
    image: string;
    initials: string;
  };
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule, ScrollerModule, BadgeModule, LucideAngularModule, OverlayPanelModule, ScrollPanelModule, AvatarModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  readonly bell = Bell;
  notificationsService = inject(NotificationsService)
  notifications = this.notificationsService.notifications;
  unreadCount = computed(() => this.notificationsService.unreadCount);
  
  menuItems = [
    { 
      label: 'Notifications', 
      items: [] 
    }
  ];

  toggleMenu(event: Event) {
    const menuElement = document.getElementById('notifications-menu');
    if (menuElement) {
      menuElement.click();
    }
  }

  markAllAsRead() {
    this.notificationsService.markAllAsRead();
  }
}
