import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriminalService } from 'src/app/services/criminal.service';

@Component({
  selector: 'app-edit-criminal',
  templateUrl: './edit-criminal.component.html',
  styleUrls: ['./edit-criminal.component.css']
})
export class EditCriminalComponent implements OnInit {

  constructor(private criminilService:CriminalService, private router:Router, private activatedRoute: ActivatedRoute) { }

  criminal:any={
    id:"",
    cin:"",
    nom:"",
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
    this.criminilService.findCriminal(this.id).subscribe(
      res=>this.criminal = res,
      err => console.log(err)
    )
  }

  Modifier(){
    this.criminilService.modifierCriminal(this.criminal).subscribe(
      (_) => {
        this.router.navigate(['/criminal'])
      },
      err => console.log(err)
    )
  }
}
