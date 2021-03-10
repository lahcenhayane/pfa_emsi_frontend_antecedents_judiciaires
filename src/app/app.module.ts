import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/main/home/home.component';
import { UserComponent } from './components/main/user/user.component';
import { CriminalComponent } from './components/main/criminal/criminal.component';
import { CrimeComponent } from './components/main/crime/crime.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/main/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JWTInterceptor } from './jwt.interceptor';
import { AddComponent } from './components/main/add/add.component';
import { ShowUserComponent } from './components/main/show-user/show-user.component';
import { EditUserComponent } from './components/main/edit-user/edit-user.component';
import { AddCriminalComponent } from './components/main/add-criminal/add-criminal.component';
import { EditCriminalComponent } from './components/main/edit-criminal/edit-criminal.component';
import { ShowCriminalComponent } from './components/main/show-criminal/show-criminal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CriminalComponent,
    CrimeComponent,
    PageNotFoundComponent,
    AddComponent,
    ShowUserComponent,
    EditUserComponent,
    AddCriminalComponent,
    EditCriminalComponent,
    ShowCriminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JWTInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }