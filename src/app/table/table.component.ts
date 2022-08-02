import { Component, OnInit, ViewChild } from '@angular/core';
import { DataComponent, TeamMember } from '../data.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  team: TeamMember[] = [];
  data: DataComponent = new DataComponent;

  pageNumber: number = 1;
  pageItems: number = 2;
  
  setPage(page: number) {
    this.pageNumber = page;
  }

  constructor() { }

  ngOnInit() {
    this.data.getTeam().subscribe(team => {
      this.team = team
      this.team.slice(0,2);
    })

    console.log(this.team);
  }

  firstPage() {
    this.pageNumber = 1;
    this.team.slice(0,2)
  }

  lastPage() {

  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
  }

  previousPage() {
    this.pageNumber = this.pageNumber - 1;

  }

}
