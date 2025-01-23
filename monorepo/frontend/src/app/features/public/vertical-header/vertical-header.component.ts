import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Bell, LayoutGrid, LucideAngularModule, Plus, User } from 'lucide-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { IconLogoComponent } from '../../../shared/components/icon-logo/icon-logo.component';
import { NotificationsComponent } from '../notifications/notifications.component';


interface HeaderItem {
  label?: string; 
  icon?: string;  
  type: 'button' | 'icon'; 
  action?: string; 
  classes?: string; 
}

@Component({
  selector: 'app-vertical-header',
  standalone: true,
  imports: [CommonModule, TooltipModule, ButtonModule, ToolbarModule, LucideAngularModule,  AutoCompleteModule, IconLogoComponent, NotificationsComponent],
  templateUrl: './vertical-header.component.html',
  styleUrl: './vertical-header.component.scss'
})
export class VerticalHeaderComponent {
  readonly userIcon = User;
  readonly bellIcon = Bell;
  readonly layoutGridIcon = LayoutGrid;
  readonly plusIcon = Plus;
}
