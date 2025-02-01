import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Home, LucideAngularModule } from 'lucide-angular';
import { TooltipModule } from 'primeng/tooltip';

interface NavItem {
  commands: any[];
  icon: any;
  label: string;
  exact?: boolean;
}


@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TooltipModule, LucideAngularModule],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'scaleX(0)' }),
        animate('200ms ease-out', style({ transform: 'scaleX(1)' }))
      ])
    ])
  ],
})
export class MainNavigationComponent {
  readonly Home = Home;

  readonly navItems: NavItem[] = [
    {
      commands: [{ outlets: { principal: ['feed'] } }],
      icon: Home,
      label: 'Feed',
      exact: true
    },
  ];
}
