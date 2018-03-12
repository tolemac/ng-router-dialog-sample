import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-different-routes",
  template: `
  <p>
    It works! {{counter}}
    <button (click)="counter = counter + 1">Add</button>
  </p>
  <a *ngIf="!isDialogOpened" routerLink="./dialog">Open Dialog</a>
  <p *ngIf="isDialogOpened">DIALOG IS OPEN <a routerLink="..">Close Dialog</a> </p>
  `,
  styles: []
})
export class DifferentRoutesComponent implements OnInit {
  counter = 0;
  isDialogOpened: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("constructor");
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url && url.length > 0) {
        if (url[url.length - 1].path === "dialog") {
          this.showDialog();
        }
      } else {
        this.hideDialog();
      }
    });
  }

  showDialog() {
    if (!this.isDialogOpened) {
      console.log("Opening dialog!");
      this.isDialogOpened = true;
    }
  }

  hideDialog() {
    if (this.isDialogOpened) {
      console.log("Closing dialog!");
      this.isDialogOpened = false;
    }
  }
}
