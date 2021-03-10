import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-criminal',
  templateUrl: './show-criminal.component.html',
  styleUrls: ['./show-criminal.component.css']
})
export class ShowCriminalComponent implements OnInit {

  constructor() { }

  id:String="";
  user:any={
    name:"",
    email:"",
    password:"",
    ville:"",
    tel:"",
    role:""
  };

  ngOnInit(): void {
  }

}
