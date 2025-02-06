import { Component } from '@angular/core';
import { FeedPostsComponent } from '../feed-posts/feed-posts.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { InlineCreatorPosComponent } from '../inline-creator-pos/inline-creator-pos.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RightSidebarComponent, FeedPostsComponent, InlineCreatorPosComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
