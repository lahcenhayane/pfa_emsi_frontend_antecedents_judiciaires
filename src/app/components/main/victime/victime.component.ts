import { Component, OnInit } from '@angular/core';
import { Criminal } from 'src/app/models/criminal';
import { VictimeService } from 'src/app/services/victime.service';

@Component({
  selector: 'app-victime',
  templateUrl: './victime.component.html',
  styleUrls: ['./victime.component.css']
})
export class VictimeComponent implements OnInit {

  constructor(private victimeService:VictimeService) { }

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
    this.victimeService.getCriminal().subscribe(
      res => { this.searchCriminals = this.criminals = res },
      err => { console.log(err) }
    )
  }

  delete(id){
    this.victimeService.deleteCrimila(id).subscribe(
      (_) => { this.searchCriminals = this.criminals = this.criminals.filter(row => row.id != id);},
      err => { console.log(err);}
    )
  }

  searchCriminal(){
    this.searchCriminals = this.criminals.filter((row) => row.cin.toLowerCase().includes(this.search.toLowerCase()));
  }

}
