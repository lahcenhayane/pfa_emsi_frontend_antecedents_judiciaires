import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-add-victime',
  templateUrl: './add-victime.component.html',
  styleUrls: ['./add-victime.component.css']
})
export class AddVictimeComponent implements OnInit {

  constructor(private victimeService:VictimeService, private router:Router) { }
  criminals:any={
    cin:"",
    nom:"",
    prenom:"",
    addresse:"",
    sexe:"Homme",
    dateNaissance:"",
    ville:"",
    tel:""
  }
  ngOnInit(): void {
  }


  addCriminal(){
    this.victimeService.addCriminal(this.criminals).subscribe(
      res => {
        this.router.navigate(['/victime']);
      },err => {
        console.log(err);
      }
    )
  }

}
