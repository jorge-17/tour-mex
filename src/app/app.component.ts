import { Component } from '@angular/core';
import { LugaresComponent } from './lugares/lugares.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LugaresComponent]
})
export class AppComponent {
  title = 'TourMex';  
}
