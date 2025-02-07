import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
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

   isPending = signal(false);
    showPendingAlert = signal(false);
    
    // Computed values
    buttonText = computed(() => this.isPending() ? 'Pending' : 'Connect');
    buttonClass = computed(() => `
      flex items-center gap-2 px-4 py-1 rounded-lg
      ${this.isPending() 
        ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
        : 'bg-black text-white hover:bg-gray-800'}
    `);
  
    // Methods
    handleConnectionRequest() {
      if (this.isPending()) {
        this.showPendingAlert.set(true);
      } else {
        console.log(`Sending connection request to user: ${this.author()}`);
        this.isPending.set(true);
      }
    }
  
    cancelRequest() {
      console.log(`Cancelling connection request for user: ${this.author()}`);
      this.isPending.set(false);
      this.showPendingAlert.set(false);
    }
  
    keepPending() {
      this.showPendingAlert.set(false);
    }
}
