import { Injectable, signal } from '@angular/core';
import { Notification } from '../types/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _notifications = signal<Notification[]>([
    {
      id: "1",
      title: "New Project Invitation",
      description: "John Doe invited you to collaborate on 'AI Research Project'",
      time: "2 min ago",
      avatar: "/assets/placeholder.svg",
      unread: true,
    },
    {
      id: "2",
      title: "Review Request",
      description: "Sarah Smith requested a review on their latest submission",
      time: "1 hour ago",
      avatar: "/assets/placeholder.svg",
      unread: true,
    }
  ]);

  notifications = this._notifications.asReadonly();

  get unreadCount() {
    return this._notifications().filter(n => n.unread).length;
  }

  markAsRead(id: string) {
    this._notifications.update(notifications => 
      notifications.map(n => 
        n.id === id ? { ...n, unread: false } : n
      )
    );
  }

  markAllAsRead() {
    this._notifications.update(notifications => 
      notifications.map(n => ({ ...n, unread: false }))
    );
  }
}