import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Clock3, Ellipsis, LucideAngularModule, Plus } from 'lucide-angular';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { Post } from '../types/post';

@Component({
  selector: 'app-post-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, BadgeModule, TooltipModule, MenuModule, LucideAngularModule],
  templateUrl: './post-header.component.html',
  styleUrl: './post-header.component.scss'
})
export class PostHeaderComponent {
  readonly clock3 = Clock3;
  readonly ellipsis = Ellipsis;
  readonly plus = Plus

  author = input.required<Post['author']>();
  readTime = input.required<number>();

  menuItems: MenuItem[] = [
    { label: 'Copy link', icon: 'pi pi-copy' },
    { label: 'Report post', icon: 'pi pi-flag' }
  ];
}
