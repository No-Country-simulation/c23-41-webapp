import { Component, Input } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-rating-display',
  standalone: true,
  imports: [ProgressBarModule, LucideAngularModule],
  templateUrl: './rating-display.component.html',
  styleUrl: './rating-display.component.scss'
})
export class RatingDisplayComponent {
  readonly star = Star;
  @Input() rating!: number;
  @Input() reviewCount!: number;
}
