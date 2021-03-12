import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Criminal } from 'src/app/models/criminal';
import { CrimesService } from 'src/app/services/crimes.service';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-show-crime',
  templateUrl: './show-crime.component.html',
  styleUrls: ['./show-crime.component.css']
})
export class ShowCrimeComponent implements OnInit {

  id:String=""; //For Get Id Of Crime
  search?:any; //For Search Of Criminale
  show?:boolean=false; //For Show Table Pivot
  crime?:any;
  infoCrime?:any;
  pivotInfoCrime?:any;
  searchInfoCrime?:any;


  victimes:Criminal[]=[];
  searchV:any;
  searchVictimes:Criminal[]=[];
  constructor(private crimeService:CrimesService ,private activatedRouter:ActivatedRoute,private victimeService:VictimeService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getCrime();
    this.getAllVictimes();
  }

  getCrime(){
    this.crimeService.getInfoCrime(this.id).subscribe(
      res => { this.infoCrime = res; this.searchInfoCrime = this.infoCrime.criminals },
      err => { console.log(err) }
    )
  }

  serach(){
    this.searchInfoCrime = this.infoCrime.criminals.filter(row => row.cin.toLowerCase().includes(this.search.toLowerCase()))
  }

  getAllVictimes(){
    this.victimeService.getCriminal().subscribe(
      res => { this.victimes = res; this.searchVictimes = this.infoCrime.victimes },
      err => { console.log(err) }
    )
  }
  searchVictime(){
    this.searchVictimes = this.infoCrime.victimes.filter((row) => row.cin.toLowerCase().includes(this.searchV.toLowerCase()));
  }


  fermer(){
    this.show = false;
  }

  // info(id){
  //   console.log(this.infoCrime);
  //   this.show = true;
  //   this.pivotInfoCrime = this.infoCrime.criminals.filter(row => row.cin == id)
  //   console.log(this.pivotInfoCrime);
    
  // }

}
