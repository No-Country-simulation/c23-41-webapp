import { Component } from '@angular/core';
import { VerticalHeaderComponent } from '../vertical-header/vertical-header.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [VerticalHeaderComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
