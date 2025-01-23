import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-latest-connections',
  standalone: true,
  imports: [CardModule],
  templateUrl: './latest-connections.component.html',
  styleUrl: './latest-connections.component.scss'
})
export class LatestConnectionsComponent {
  connections = [
    { name: 'John Doe', role: 'Software Engineer', time: '2h ago' },
    { name: 'Jane Smith', role: 'Product Manager', time: '1d ago' },
    { name: 'Alice Johnson', role: 'UX Designer', time: '3d ago' },
  ];
  
}
