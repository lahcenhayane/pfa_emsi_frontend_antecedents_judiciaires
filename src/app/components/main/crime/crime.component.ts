import { Component, OnInit } from '@angular/core';
import { CrimesService } from 'src/app/services/crimes.service';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {

  crimes:any[]=[]
  searchCrimes:any[]=[]
  search?:any;

  constructor(private crimeService : CrimesService) { }

  ngOnInit(): void {
    this.listCrimes()
  }

  listCrimes(){
    this.crimeService.getAllCrime().subscribe(
      res => { this.searchCrimes = this.crimes = res },
      err => { console.log(err);
       }
    )
  }

  searchCrime(){
    this.searchCrimes = this.crimes.filter(row => row.titre.toLowerCase().includes(this.search.toLowerCase()));
  }

  delete(id){
    this.crimeService.deleteCrime(id).subscribe(
      _ => { this.searchCrimes = this.crimes.filter(row => row.id != id) },
      err => { console.log(err) }
    )
  }

}
