import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { LatestConnectionsComponent } from '../latest-connections/latest-connections.component';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CardModule, TagModule, LatestConnectionsComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {
  featuredSkills = [
    { title: 'React Development', author: 'Alice Smith', match: 95 },
    { title: 'UX Design Principles', author: 'Bob Johnson', match: 88 },
    { title: 'Data Science with Python', author: 'Carol Williams', match: 92 },
    { title: 'Mobile App Development', author: 'David Brown', match: 85 },
  ];

  recommendations = [
    { title: 'Introduction to Machine Learning', skill: 'AI & Machine Learning' },
    { title: 'Advanced CSS Techniques', skill: 'Web Development' },
    { title: 'Agile Project Management', skill: 'Project Management' },
  ];
}
