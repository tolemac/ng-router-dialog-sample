import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DifferentRoutesComponent } from "./different-routes/different-routes.component";
import { WithChildRoutesComponent } from "./with-child-routes/with-child-routes.component";
import { WithParamsComponent } from "./with-params/with-params.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DifferentRoutesComponent,
    WithChildRoutesComponent,
    WithParamsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
