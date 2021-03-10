import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  search="";
  users:User[]=[];
  usersSearch:User[]=[];
  id:String = localStorage.getItem("userID");

  constructor(private userService: UserService, private account:AccountService) { }

  ngOnInit(): void {
    this.listUser()

  }

  searchUsers(){
    this.usersSearch = this.users.filter((row) => row.email.toLowerCase().includes(this.search.toLowerCase()));
  }

  showEdit:boolean = false;

  edit(){
    this.showEdit = true;
  }
  showAjouter(){
    this.showEdit = false;
  }

  listUser(){
    this.userService.listUser().subscribe(
      res=>{
        this.usersSearch = this.users = res.filter(row => row.id != this.id);
      }
    )
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(() => {
      this.usersSearch = this.users = this.users.filter( row => row.id != id);
    })
  }
}
