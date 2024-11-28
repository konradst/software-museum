import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiDemoComponent } from './api-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApiDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-19-ssr';
}
