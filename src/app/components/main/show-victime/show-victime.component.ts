import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-show-victime',
  templateUrl: './show-victime.component.html',
  styleUrls: ['./show-victime.component.css']
})
export class ShowVictimeComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private victimeService:VictimeService) { }

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
    this.victimeService.findCriminal(this.id).subscribe(
      res => {this.criminal = res}
      ,err => {console.log(err)}
    )
  }

}
