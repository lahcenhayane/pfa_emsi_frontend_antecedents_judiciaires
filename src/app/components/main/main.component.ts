import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private account:AccountService, private router:Router) {
  }

  token:any = "";
  username = this.account.getName();
  role =  this.account.getRole();

  ngOnInit(): void {
    this.token=this.account.getToken();
  }

  logout(){
    this.account.removeLocalStorage();
    this.token=this.account.getToken();
    this.router.navigate(['/'])
  }

}
