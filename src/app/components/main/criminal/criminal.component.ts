import { Component, OnInit } from '@angular/core';
import { Criminal } from 'src/app/models/criminal';
import { AccountService } from 'src/app/services/account.service';
import { CriminalService } from 'src/app/services/criminal.service';

@Component({
  selector: 'app-criminal',
  templateUrl: './criminal.component.html',
  styleUrls: ['./criminal.component.css']
})
export class CriminalComponent implements OnInit {

  constructor(private criminalService:CriminalService, private account:AccountService) { }

  role =  this.account.getRole();

  criminals:Criminal[]=[];
  search:any;
  searchCriminals:Criminal[]=[];
  ngOnInit(): void {
    this.getCirminal();
  }
  showEdit:boolean = false;

  edit(){
    this.showEdit = true;
  }
  showAjouter(){
    this.showEdit = false;
  }
  getCirminal(){
    this.criminalService.getCriminal().subscribe(
      res => { this.searchCriminals = this.criminals = res },
      err => { console.log(err) }
    )
  }

  delete(id){
    this.criminalService.deleteCrimila(id).subscribe(
      (_) => { this.searchCriminals = this.criminals = this.criminals.filter(row => row.id != id);},
      err => { console.log(err);}
    )
  }

  searchCriminal(){
    this.searchCriminals = this.criminals.filter((row) => row.cin.toLowerCase().includes(this.search.toLowerCase()));
  }

}
