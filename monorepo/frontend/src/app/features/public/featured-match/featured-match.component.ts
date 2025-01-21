import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-match',
  standalone: true,
  imports: [],
  templateUrl: './featured-match.component.html',
  styleUrl: './featured-match.component.scss'
})
export class FeaturedMatchComponent {
   featuredSkills = [
    { title: "React Development", author: "Alice Smith", match: 95 },
    { title: "UX Design Principles", author: "Bob Johnson", match: 88 },
    { title: "Data Science with Python", author: "Carol Williams", match: 92 },
    { title: "Mobile App Development", author: "David Brown", match: 85 },
  ]

   recommendations = [
    { title: "Introduction to Machine Learning", skill: "AI & Machine Learning" },
    { title: "Advanced CSS Techniques", skill: "Web Development" },
    { title: "Agile Project Management", skill: "Project Management" },
  ]
}
