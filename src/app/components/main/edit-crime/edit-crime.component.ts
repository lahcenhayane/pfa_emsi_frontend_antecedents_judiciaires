import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criminal } from 'src/app/models/criminal';
import { CrimesService } from 'src/app/services/crimes.service';
import { CriminalService } from 'src/app/services/criminal.service';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-edit-crime',
  templateUrl: './edit-crime.component.html',
  styleUrls: ['./edit-crime.component.css']
})
export class EditCrimeComponent implements OnInit {

  constructor(private criminalService:CriminalService,
    private crimeService:CrimesService,
    private victimeService:VictimeService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

    allVictimes:Criminal[]=[];
    allCriminels:Criminal[]=[];

  crime:any={
    id:"",
    number:"",
    lieu:"",
    typeCrime:"",
    descriptionFichier:"",
    criminals:[],
    victimes:[]
  }

  criminals:Criminal[]=[];
  search:any;
  searchCriminals:Criminal[]=[];


  victimes:Criminal[]=[];
  searchV:any;
  searchVictimes:Criminal[]=[];

  id?;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCrime();
    this.getVictimes();
    this.getCriminels();
  }


  getVictimes(){
    this.victimeService.getCriminal().subscribe(
      res => { 
        this.searchVictimes = this.allVictimes = res;
      },
      err => { console.log(err)}
    )
  }
  getCriminels(){
    this.criminalService.getCriminal().subscribe(
      res => { this.searchCriminals = this.allCriminels = res },
      err => { console.log(err)}
    )
  }


  getCrime(){
    this.crimeService.getInfoCrime(this.id).subscribe(
      res => { 
        this.crime = res;
        this.criminals = this.crime.criminals;
        this.victimes = this.crime.victimes;
      }
    )
  }
  searchCriminels(){
    this.searchCriminals = this.allCriminels.filter((row) => row.cin.toLowerCase().includes(this.search.toLowerCase()));
  }

  searchVictime(){
    this.searchVictimes = this.allVictimes.filter((row) => row.cin.toLowerCase().includes(this.searchV.toLowerCase()));
  }

  modifier(){
    this.crimeService.modifier(this.crime).subscribe(
      res => { this.router.navigate(["crime"]) },
      err => { console.log(err) }
    )
  }

}
