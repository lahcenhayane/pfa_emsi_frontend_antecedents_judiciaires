import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCriminalComponent } from './components/main/add-criminal/add-criminal.component';
import { AddComponent } from './components/main/add/add.component';
import { CrimeComponent } from './components/main/crime/crime.component';
import { CriminalComponent } from './components/main/criminal/criminal.component';
import { EditCriminalComponent } from './components/main/edit-criminal/edit-criminal.component';
import { EditUserComponent } from './components/main/edit-user/edit-user.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { ShowCriminalComponent } from './components/main/show-criminal/show-criminal.component';
import { ShowUserComponent } from './components/main/show-user/show-user.component';

import { UserComponent } from './components/main/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AfterLoginGuard } from './guards/after-login.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent, canActivate:[AfterLoginGuard]},
  {path:"home", component:HomeComponent, canActivate:[LoginGuard]},
  
  {path:"users", children:[
    {path:"", component:UserComponent },
    {path:"add", component:AddComponent },
    {path:"show/:id", component:ShowUserComponent },
    {path:"edit/:id", component:EditUserComponent },
  ],canActivate:[LoginGuard]},
  
  {path:"crimes", component:CrimeComponent, canActivate:[LoginGuard]},
  {path:"criminal", children:[
    {path:'', component:CriminalComponent},
    {path:'add', component:AddCriminalComponent},
    {path:"show/:id", component:ShowCriminalComponent },
    {path:'edit/:id', component:EditCriminalComponent}
  ], canActivate:[LoginGuard]},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
