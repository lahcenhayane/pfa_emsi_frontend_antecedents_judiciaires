import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';
import { MainComponent } from '../main.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  userLogin:any = {
    email:"",
    password:""
  }

  constructor(private loginService : LoginService, private route:Router, private account:AccountService, private main:MainComponent) {
    
  }

  ngOnInit(): void {
    
  }

  login(){
    this.loginService.login(this.userLogin).subscribe(
      res => {
        this.account.saveLoacaleStorage(res);
        this.route.navigate(['/home']);
        this.main.token = this.account.getToken();
    },err=>{
      console.log(err);
    })
  }



}
