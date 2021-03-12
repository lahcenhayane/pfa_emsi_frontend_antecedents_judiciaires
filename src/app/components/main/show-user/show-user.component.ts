import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private userService: UserService, private router:Router, private activateRoute:ActivatedRoute) { }

  id:String="";
  user:User={
    adresse:"",
    email:"",
    password:"",
    ville:"",
    tel:"",
    role:""
  };

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.show(this.id);
  }

  show(id){
    this.userService.findUser(id).subscribe(res => {
      if (res == null) {
        this.router.navigate(['pageNotFound']);
      }
      this.user = res
    });
  }

}
