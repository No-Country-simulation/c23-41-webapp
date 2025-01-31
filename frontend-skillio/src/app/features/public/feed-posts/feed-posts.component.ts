import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Bookmark, Ellipsis, LucideAngularModule, MessageSquare, Share2, ThumbsUp } from 'lucide-angular';
import { PostService } from './service/post.service';
import { PostHeaderComponent } from './post-header/post-header.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PostEngagementSectionComponent } from './post-engagement-section/post-engagement-section.component';

@Component({
  selector: 'app-feed-posts',
  standalone: true,
  imports: [CommonModule, CardModule,
    PostHeaderComponent,
    PostContentComponent,
    PostEngagementSectionComponent],
  templateUrl: './feed-posts.component.html',
  styleUrl: './feed-posts.component.scss'
})
export class FeedPostsComponent {
  public readonly postService = inject(PostService);
  readonly post = this.postService.getPost();
  toggleExpanded(post: any) {
    post.expanded = !post.expanded;
  }
}
