import { Component, Input } from '@angular/core';
import { UserProfile } from './types/user-profile';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { RatingDisplayComponent } from './rating-display/rating-display.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReviewListComponent } from './review-list/review-list.component';

const userProfile: UserProfile = {
  name: 'Joe Doe',
  faculty: 'Computer Science',
  avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
  banner: 'https://i.pravatar.cc/162?img=12?width=200&height=100',
  rating: 4.8,
  bio: 'A passionate frontend developer with expertise in Angular, TypeScript, and scalable web architecture. Known for delivering clean, maintainable, and efficient code with a strong focus on user experience.',
  projects: [
    {
      id: 'PRJ-001',
      name: 'E-commerce Platform Development',
      role: 'Frontend Lead',
      status: 'completed',
    },
    {
      id: 'PRJ-002',
      name: 'Microfrontend Architecture for SaaS Platform',
      role: 'Frontend Architect',
      status: 'current',
    },
    {
      id: 'PRJ-003',
      name: 'Component Library for Enterprise Applications',
      role: 'Project Owner',
      status: 'completed',
    },
  ],
  reviews: [
    {
      id: 'REV-001',
      author: 'Jane Doe',
      avatar: 'https://example.com/reviewer1.jpg',
      rating: 5,
      comment: 'Luis demonstrated exceptional technical expertise and leadership on our e-commerce project. His attention to detail and clean code were instrumental in the project’s success.',
    },
    {
      id: 'REV-002',
      author: 'John Smith',
      avatar: 'https://example.com/reviewer2.jpg',
      rating: 4.7,
      comment: 'Working with Luis on the microfrontend SaaS architecture was a game-changer. His insights helped improve scalability and maintainability across services.',
    },
    {
      id: 'REV-003',
      author: 'Emily Carter',
      avatar: 'https://example.com/reviewer3.jpg',
      rating: 4.9,
      comment: 'The component library developed by Luis significantly reduced development time and ensured UI consistency. Highly recommend his work!',
    },
  ],
};


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ButtonModule, AvatarModule, CardModule, RatingDisplayComponent, ProjectListComponent, ReviewListComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  profile: UserProfile = userProfile;
}
