import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PreviousPageComponent } from './previous-page/previous-page.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "past", component: PreviousPageComponent},
  {path: "about", component: AboutPageComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
