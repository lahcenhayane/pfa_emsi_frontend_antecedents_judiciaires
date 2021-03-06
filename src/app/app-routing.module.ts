import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimeComponent } from './components/crime/crime.component';
import { HomeComponent } from './components/main/home/home.component';
import { UserComponent } from './components/main/user/user.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"users", component:UserComponent},
  {path:"crimes", component:CrimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
