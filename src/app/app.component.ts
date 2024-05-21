import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatAnchor],
  styles: `li {
    list-style-type: none;
    display: inline-block;
    padding: 0 1em;
  }`,
  template: `<h1>Welcome</h1> <ul>
  <li><a routerLink="/" mat-raised-button>Home</a></li>
  <li><a routerLink="/quiz" mat-raised-button>Quiz</a></li>
  </ul>
  <router-outlet/>`
})
export class AppComponent {
  title = 'modern-angular-ijs';
}
