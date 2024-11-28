import { CommonModule } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-api-demo',
  imports: [CommonModule],
  template: '{{ text.value() }}',
})
export class ApiDemoComponent {
  title = 'angular-19-ssr';
  text = resource({
    loader: () => fetch(`api/hello`).then((res) => res.json()),
  });
}
