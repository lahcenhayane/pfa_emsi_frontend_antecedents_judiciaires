import { Component, OnInit } from '@angular/core';
import { CriminalService } from 'src/app/services/criminal.service';

@Component({
  selector: 'app-criminal',
  templateUrl: './criminal.component.html',
  styleUrls: ['./criminal.component.css']
})
export class CriminalComponent implements OnInit {

  constructor(private criminalService:CriminalService) { }

  criminals:any[]=[];

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
      res => { this.criminals = res },
      err => { console.log(err) }
    )
  }

  delete(id){
    this.criminalService.deleteCrimila(id).subscribe(
      (_) => {this.criminals = this.criminals.filter(row => row.id != id);},
      err => { console.log(err);}
    )
  }

}
