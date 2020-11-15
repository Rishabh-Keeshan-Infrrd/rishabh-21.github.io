import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tyro';

  tooltipOptions = {
    'show-delay': '500',
    'tooltip-class': 'new-tooltip-class'
  };
}
