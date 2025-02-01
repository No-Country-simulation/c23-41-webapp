import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { NotificationsService } from '../service/notification.service';
import { Notification } from '../types/notification';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) notification!: Notification;
  notificationsService = inject(NotificationsService);


  markAsRead() {
    this.notificationsService.markAsRead(this.notification.id);
  }
}
