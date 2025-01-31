import { Component, input } from '@angular/core';
import { Post } from '../types/post';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { Clock3, Ellipsis, LucideAngularModule } from 'lucide-angular';

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

  author = input.required<Post['author']>();
  readTime = input.required<number>();

  menuItems: MenuItem[] = [
    { label: 'Copy link', icon: 'pi pi-copy' },
    { label: 'Report post', icon: 'pi pi-flag' }
  ];
}
