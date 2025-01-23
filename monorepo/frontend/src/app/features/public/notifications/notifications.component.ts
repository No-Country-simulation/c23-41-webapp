import { Component, ViewChild } from '@angular/core';
import { Bell, Check, LucideAngularModule, Trash, Trash2 } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';

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
  imports: [CommonModule, OverlayPanelModule, ButtonModule, LucideAngularModule, DividerModule, BadgeModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  op = ViewChild(OverlayPanel, { static: true });
  readonly bellIcon = Bell;
  readonly checkIcon = Check;
  readonly trashIcon = Trash2;

  notifications: Notification[] = [
    {
      id: '1',
      title: 'New Comment',
      description: 'Alice Smith commented on your "React Hooks" post',
      time: '5m ago',
      read: false,
      type: 'comment',
      user: {
        name: 'Alice Smith',
        image: '/assets/placeholder.svg',
        initials: 'AS',
      },
    },
    {
      id: '2',
      title: 'Achievement Unlocked',
      description: "You've completed 5 JavaScript tutorials!",
      time: '1h ago',
      read: false,
      type: 'achievement',
    },
    {
      id: '3',
      title: 'Course Recommendation',
      description: 'New course: "Advanced TypeScript Patterns"',
      time: '2h ago',
      read: true,
      type: 'course',
    },
    {
      id: '4',
      title: 'New Follower',
      description: 'Bob Johnson started following you',
      time: '3h ago',
      read: true,
      type: 'follow',
      user: {
        name: 'Bob Johnson',
        image: '/assets/placeholder.svg',
        initials: 'BJ',
      },
    },
    {
      id: '5',
      title: 'Post Liked',
      description: 'Carol Williams liked your "Data Visualization" post',
      time: '5h ago',
      read: true,
      type: 'like',
      user: {
        name: 'Carol Williams',
        image: '/assets/placeholder.svg',
        initials: 'CW',
      },
    },
  ];

  get unreadCount(): number {
    return this.notifications.filter((n) => !n.read).length;
  }

  markAllAsRead(): void {
    this.notifications.forEach((n) => (n.read = true));
  }

  clearAll(): void {
    this.notifications = [];
  }
}
