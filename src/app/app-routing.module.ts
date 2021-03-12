import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCriminalComponent } from './components/main/add-criminal/add-criminal.component';
import { AddComponent } from './components/main/add/add.component';
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
import { CrimeComponent } from './components/main/crime/crime.component';
import { ShowCrimeComponent } from './components/main/show-crime/show-crime.component';
import { AddCrimeComponent } from './components/main/add-crime/add-crime.component';
import { GpGuard } from './guards/gp.guard';
import { VictimeComponent } from './components/main/victime/victime.component';
import { AddVictimeComponent } from './components/main/add-victime/add-victime.component';
import { ShowVictimeComponent } from './components/main/show-victime/show-victime.component';
import { EditVictimeComponent } from './components/main/edit-victime/edit-victime.component';
import { EditCrimeComponent } from './components/main/edit-crime/edit-crime.component';
import { TribunalGuard } from './guards/tribunal.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent, canActivate:[AfterLoginGuard]},
  {path:"home", component:HomeComponent, canActivate:[LoginGuard]},
  
  {path:"users", children:[
    {path:"", component:UserComponent },
    {path:"add", component:AddComponent },
    {path:"show/:id", component:ShowUserComponent },
    {path:"edit/:id", component:EditUserComponent },
  ],canActivate:[LoginGuard, GpGuard, TribunalGuard]},
  
  {path:"crime", children:[
    {path:"", component:CrimeComponent},
    {path:"add", component:AddCrimeComponent},
    {path:"show/:id", component:ShowCrimeComponent},
    {path:'edit/:id', component:EditCrimeComponent}
  ],canActivate:[LoginGuard, GpGuard, AdminGuard]},

  {path:"criminal", children:[
    {path:'', component:CriminalComponent},
    {path:'add', component:AddCriminalComponent},
    {path:"show/:id", component:ShowCriminalComponent },
    {path:'edit/:id', component:EditCriminalComponent}
  ], canActivate:[LoginGuard, AdminGuard]},

  {path:"victime", children:[
    {path:'', component:VictimeComponent},
    {path:'add', component:AddVictimeComponent},
    {path:"show/:id", component:ShowVictimeComponent},
    {path:'edit/:id', component:EditVictimeComponent}
  ], canActivate:[LoginGuard, GpGuard, AdminGuard]},

  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
