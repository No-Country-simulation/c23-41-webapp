import { Component } from '@angular/core';
import { VerticalHeaderComponent } from '../vertical-header/vertical-header.component';
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { FeedPostsComponent } from '../feed-posts/feed-posts.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [VerticalHeaderComponent, RouterOutlet, RightSidebarComponent, FeedPostsComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
