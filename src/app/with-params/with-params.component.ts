import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-with-params",
  template: `
  <p>
    it works! {{counter}}
    <button (click)="counter = counter + 1">Add</button>
  </p>
  <a *ngIf="!isDialogOpened" routerLink="." [queryParams]="{dialog: true}">Open Dialog</a>
  <p *ngIf="isDialogOpened">DIALOG IS OPEN <a routerLink="." [queryParams]="{}">Close dialog</a> </p>
`,
  styles: []
})
export class WithParamsComponent implements OnInit {
  counter = 0;
  isDialogOpened: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("constructor");
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["dialog"] === "true") {
        this.showDialog();
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
