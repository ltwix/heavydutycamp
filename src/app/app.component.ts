import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'hdbootcamp-root',
  template: `
    <header>
      <h1>Hola, soy Bob.</h1>
    </header>
  `,
})
export class AppComponent {}
