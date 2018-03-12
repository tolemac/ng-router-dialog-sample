import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p>AppComponent -> <a routerLink="/home">Go home</a></p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "app";
}
