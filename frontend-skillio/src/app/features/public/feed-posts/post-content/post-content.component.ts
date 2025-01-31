import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-post-content',
  standalone: true,
  imports: [CommonModule, BadgeModule, ButtonModule, LucideAngularModule],
  templateUrl: './post-content.component.html',
  styleUrl: './post-content.component.scss'
})
export class PostContentComponent {
  readonly externalLink = ExternalLink;
  
  title = input.required<string>();
  content = input.required<string>();
  tags = input.required<string[]>();
  authorName = input.required<string>();
}
