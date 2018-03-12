import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  template: `
  <ul>
    <li><a routerLink="/diferent-routes">Con diferentes rutas</a></li>
    <li><a routerLink="/with-child-routes">Con rutas hijas</a></li>
    <li><a routerLink="/with-params">Con parametros</a></li>
  </ul>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
