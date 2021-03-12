import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriminalService } from 'src/app/services/criminal.service';

@Component({
  selector: 'app-add-criminal',
  templateUrl: './add-criminal.component.html',
  styleUrls: ['./add-criminal.component.css']
})
export class AddCriminalComponent implements OnInit {

  urlImage:String="assets/images/logo_user_default.jpg";
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
  
  constructor(private criminalService:CriminalService, private router:Router) { }
  ngOnInit(): void {
  }
  // changeImage(event){
  //   if (event.target.files) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event:any) =>{
  //       this.urlImage = event.target.result;
  //     }
  //   }
  // }

  addCriminal(){
    this.criminalService.addCriminal(this.criminals).subscribe(
      res => {
        this.router.navigate(['/criminal']);
      },
      err => console.log(err)
    )
  }
}
