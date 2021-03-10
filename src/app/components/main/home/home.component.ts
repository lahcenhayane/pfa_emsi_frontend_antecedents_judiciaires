import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }
  countGP:number=0;
  countTribunal:number=0;
  countUsers:number=0;
  countCriminal:number=0;
  
  user:User={
    name:"",
    email:"",
    password:"",
    ville:"",
    tel:"",
    role:""
  }

  ngOnInit(): void {
    this.getInfo();
    this.getCountGP();
    this.getCountCriminal();
    
  }


  getInfo(){
    this.userService.getInfo().subscribe(
        res=>{ this.user = res },
        err=>{ console.log(err)
      }
    )
  }

  getCountCriminal(){
    this.userService.getCountCriminal().subscribe(
      res => { this.countCriminal = res }
    )
  }

  getCountGP(){
    this.userService.listUser().subscribe(
      res => { 
        this.countGP = res.filter(row => row.role == "GP").length;
        this.countTribunal = res.filter(row => row.role == "Tribunal").length;
        this.countUsers = res.length;
      }
    )
  }

}
