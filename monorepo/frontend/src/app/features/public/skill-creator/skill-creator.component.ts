import { Component } from '@angular/core';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-skill-creator',
  standalone: true,
  imports: [ChipsModule],
  templateUrl: './skill-creator.component.html',
  styleUrl: './skill-creator.component.scss'
})
export class SkillCreatorComponent {

}
