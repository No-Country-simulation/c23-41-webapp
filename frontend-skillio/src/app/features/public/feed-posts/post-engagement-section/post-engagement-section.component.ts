import { Component, inject } from '@angular/core';
import { EngagementService } from '../service/engagement.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Bookmark, LucideAngularModule, MessageSquare, Share2, ThumbsUp } from 'lucide-angular';

@Component({
  selector: 'app-post-engagement-section',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule, LucideAngularModule],
  templateUrl: './post-engagement-section.component.html',
  styleUrl: './post-engagement-section.component.scss'
})
export class PostEngagementSectionComponent {
  readonly bookmark = Bookmark;
  readonly share2 = Share2;
  readonly messageSquare = MessageSquare;
  readonly like = ThumbsUp;

  public readonly engagementService = inject(EngagementService);
  readonly state = this.engagementService.getState();

  getLikeButtonClass(): string {
    return `flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors ${
      this.state().isLiked ? 'bg-secondary text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
  }

  getBookmarkButtonClass(): string {
    return `p-2 rounded-full transition-colors ${
      this.state().isBookmarked ? 'bg-secondary text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
  }
}
