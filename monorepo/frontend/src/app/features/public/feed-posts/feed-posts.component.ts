import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Bookmark, Ellipsis, LucideAngularModule, MessageSquare, Share2, ThumbsUp } from 'lucide-angular';

@Component({
  selector: 'app-feed-posts',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, ButtonModule, TagModule, LucideAngularModule],
  templateUrl: './feed-posts.component.html',
  styleUrl: './feed-posts.component.scss'
})
export class FeedPostsComponent {
  readonly likeIcon = ThumbsUp;
  readonly messageIcon = MessageSquare;
  readonly shareIcon = Share2;
  readonly bookmarkIcon = Bookmark;
  readonly ellipsisIcon = Ellipsis;
  posts = [
    {
      title: 'Mastering React Hooks',
      author: 'Eva Green',
      authorAvatar: 'https://i.pravatar.cc/40?img=1',
      image: 'https://source.unsplash.com/random/800x600?react',
      description:
        'React Hooks have revolutionized the way we manage state and side effects in functional components. This comprehensive guide delves into the intricacies of useState, useEffect, useContext, and custom hooks, providing practical examples and best practices for leveraging these powerful tools in your React applications. Learn how to simplify your code, improve performance, and create more maintainable and scalable React projects using hooks.',
      skills: ['React', 'JavaScript', 'Web Development'],
      likes: 245,
      comments: 37,
      shares: 18,
      status: 'suggested',
      facultad: 'Ecomia',
      expanded: false
    },
    {
      title: 'Data Visualization Techniques',
      author: 'Frank White',
      authorAvatar: 'https://i.pravatar.cc/40?img=2',
      image: 'https://source.unsplash.com/random/800x600?data',
      description:
        'Effective data visualization is crucial for conveying complex information clearly and efficiently. This in-depth exploration covers advanced techniques for creating compelling and informative data visualizations using tools like D3.js, Tableau, and Python\'s Matplotlib. Discover how to choose the right chart types, implement interactive elements, and design visually stunning dashboards that communicate your data\'s story effectively.',
      skills: ['Data Science', 'D3.js', 'Data Visualization'],
      likes: 189,
      comments: 23,
      shares: 12,
      status: 'saved',
      facultad: 'Ciencias de la computacion',
      expanded: false
    },
    {
      title: 'Mobile UX Design Principles',
      author: 'Grace Lee',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      image: 'https://source.unsplash.com/random/800x600?ux',
      description:
        'Creating intuitive and engaging mobile user experiences is essential in today\'s smartphone-centric world. This comprehensive guide explores key principles of mobile UX design, including touch-friendly interfaces, responsive layouts, and efficient navigation patterns. Learn how to conduct user research, create effective wireframes, and implement designs that delight users and drive engagement on mobile platforms.',
      skills: ['UX Design', 'Mobile Design', 'User Research'],
      likes: 312,
      comments: 45,
      shares: 28,
      status: 'viewed',
      facultad: 'Comunicaciones',
      expanded: false
    },
  ];

  toggleExpanded(post: any) {
    post.expanded = !post.expanded;
  }
}
