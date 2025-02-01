import { Component, inject, OnInit } from '@angular/core';
import { NavigateController } from '../../../shared/controllers/navigate.controller';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  navigationController = inject(NavigateController);

  ngOnInit(): void {
    setTimeout(() => {
      this.navigationController.navigateToFeedFromPrincipalOutlet();
    }, 9000);
  }

}
