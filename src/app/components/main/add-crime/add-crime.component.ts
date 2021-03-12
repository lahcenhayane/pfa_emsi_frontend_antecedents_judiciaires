import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criminal } from 'src/app/models/criminal';
import { CrimesService } from 'src/app/services/crimes.service';
import { CriminalService } from 'src/app/services/criminal.service';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-add-crime',
  templateUrl: './add-crime.component.html',
  styleUrls: ['./add-crime.component.css']
})
export class AddCrimeComponent implements OnInit {

  constructor(private criminalService:CriminalService,
              private crimeService:CrimesService,
              private victimeService:VictimeService,
              private router:Router) { }

  crime:any={
    numero:Math.floor(Math.random() * 600000 + 1),
    typeCrime:"",
    lieu:"",
    descriptionFichier:"",
    listCriminales:[],
    listVictimes:[]
  }
  
  criminals:Criminal[]=[];
  search:any;
  searchCriminals:Criminal[]=[];


  victimes:Criminal[]=[];
  searchV:any;
  searchVictimes:Criminal[]=[];

  ngOnInit(): void {
    this.getAllCriminals();
    this.getAllVictimes();
    console.log(this.crime.listCriminales.length);
  }

  addCrime(){
    this.crimeService.add(this.crime).subscribe(
      res=>{ this.router.navigate(['crime']) },
      err=>{ console.log(err) }
    )
  }

  getAllCriminals(){
    this.criminalService.getCriminal().subscribe(
      res => { this.searchCriminals = this.criminals = res },
      err => { console.log(err) }
    )
  }
  searchCriminal(){
    this.searchCriminals = this.criminals.filter((row) => row.cin.toLowerCase().includes(this.search.toLowerCase()));
  }


  getAllVictimes(){
    this.victimeService.getCriminal().subscribe(
      res => { this.searchVictimes = this.victimes = res },
      err => { console.log(err) }
    )
  }
  searchVictime(){
    this.searchVictimes = this.victimes.filter((row) => row.cin.toLowerCase().includes(this.searchV.toLowerCase()));
  }

  check=false;
  selected(id){
    this.check = false;
    this.crime.listCriminales = this.crime.listCriminales.filter(row => { row.listCriminales != id})
    console.log(this.crime);
  }

  select(id){
    this.check = true;
    this.crime.listCriminales.push(id);
    console.log(this.crime);
    
    //this.crime.listCriminales.splice(id);
  }

}
