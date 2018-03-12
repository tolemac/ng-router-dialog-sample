import { WithParamsComponent } from "./with-params/with-params.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DifferentRoutesComponent } from "./different-routes/different-routes.component";
import { WithChildRoutesComponent } from "./with-child-routes/with-child-routes.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "diferent-routes",
    component: DifferentRoutesComponent
  },
  {
    path: "diferent-routes/dialog",
    component: DifferentRoutesComponent
  },
  {
    path: "with-child-routes",
    children: [
      {
        path: "**",
        component: WithChildRoutesComponent
      }
    ]
  },
  {
    path: "with-params",
    component: WithParamsComponent
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
