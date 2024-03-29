import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriminalService } from 'src/app/services/criminal.service';

@Component({
  selector: 'app-show-criminal',
  templateUrl: './show-criminal.component.html',
  styleUrls: ['./show-criminal.component.css']
})
export class ShowCriminalComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private criminalService:CriminalService) { }

  id:String="";
  criminal:any={
    cin:"",
    nom:"",
    prenom:"",
    addresse:"",
    ville:"",
    tel:"",
    sexe:"",
    dateNaissance:""
  };

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getCriminal();
  }

  getCriminal(){
    this.criminalService.findCriminal(this.id).subscribe(
      res => {this.criminal = res}
      ,err => {console.log(err)}
    )
  }
}
