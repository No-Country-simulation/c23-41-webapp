import { Component, Input } from '@angular/core';
import { Review } from '../types/user-profile';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, AvatarModule, LucideAngularModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss'
})
export class ReviewListComponent {
  readonly starIcon = Star;
  @Input() reviews!: Review[];
}
