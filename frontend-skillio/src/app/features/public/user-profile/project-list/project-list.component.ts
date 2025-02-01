import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';
import { TagModule } from 'primeng/tag';
import { Project } from '../types/user-profile';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [TagModule, CommonModule, LucideAngularModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  readonly chevronRight = ChevronRight;
  @Input() projects!: Project[];
}
