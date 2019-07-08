import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repro-trademe1';
  model = {
    left: true,
    middle: false,
    right: false
  };
}
