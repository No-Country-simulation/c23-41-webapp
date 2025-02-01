import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Bell, LayoutGrid, LucideAngularModule, Plus, User } from 'lucide-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { IconLogoComponent } from '../../../shared/components/icon-logo/icon-logo.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, 
    TooltipModule, 
    ButtonModule, 
    ToolbarModule, 
    LucideAngularModule,  
    AutoCompleteModule, 
    IconLogoComponent, 
    NotificationsComponent, 
    UserMenuComponent, MainNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly userIcon = User;
  readonly bellIcon = Bell;
  readonly layoutGridIcon = LayoutGrid;
  readonly plusIcon = Plus;
}
