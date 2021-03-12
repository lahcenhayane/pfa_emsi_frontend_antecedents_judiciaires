import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-edit-victime',
  templateUrl: './edit-victime.component.html',
  styleUrls: ['./edit-victime.component.css']
})
export class EditVictimeComponent implements OnInit {

  constructor(private victimeService:VictimeService, private router:Router, private activatedRoute: ActivatedRoute) { }

  criminal:any={
    id:"",
    cin:"",
    nom:"",
    addresse:"",
    prenom:"",
    sexe:"Homme",
    dateNaissance:"",
    ville:"",
    te:""
  }
  id:String;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCriminal();
  }

  getCriminal(){
    this.victimeService.findCriminal(this.id).subscribe(
      res=>this.criminal = res,
      err => console.log(err)
    )
  }

  Modifier(){
    this.victimeService.modifierCriminal(this.criminal).subscribe(
      (_) => {
        this.router.navigate(['/victime'])
      },
      err => console.log(err)
    )
  }

}
