import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private userService: UserService, private account:AccountService, private router:Router) { }
  
  user:User={
    name:"",
    email:"",
    password:"",
    ville:"",
    tel:"",
    role:"",
  }
  
  ngOnInit(): void {
  }
  addUser(){
    this.userService.addUser(this.user).subscribe(
      res => { this.router.navigate(['/users']) },
      err => { console.log(err);
       }
    )
  }

}
