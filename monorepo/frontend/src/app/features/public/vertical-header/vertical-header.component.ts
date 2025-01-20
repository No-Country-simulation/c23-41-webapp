import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-vertical-header',
  standalone: true,
  imports: [TooltipModule, ButtonModule],
  templateUrl: './vertical-header.component.html',
  styleUrl: './vertical-header.component.scss'
})
export class VerticalHeaderComponent {
  navOptions = [
    { label: 'Home', icon: 'pi pi-home', tooltip: 'Home Feed' },
    { label: 'Learning', icon: 'pi pi-graduation-cap', tooltip: 'Learning Path' },
    { label: 'Network', icon: 'pi pi-users', tooltip: 'Network' },
    { label: 'Messages', icon: 'pi pi-comments', tooltip: 'Messages' },
    { label: 'Achievements', icon: 'pi pi-trophy', tooltip: 'Achievements' },
    { label: 'Saved Items', icon: 'pi pi-bookmark', tooltip: 'Saved Items' },
  ];
}
