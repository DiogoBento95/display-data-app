import { Component, OnInit } from '@angular/core';
import { DataComponent, TeamMember } from '../data.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  team: TeamMember[] = [];
  data: DataComponent = new DataComponent;

  constructor() { }

  ngOnInit() {
    this.data.getTeam().subscribe(team => {
      this.team = team;
    })

  }

  firstPage() {

  }

  lastPage() {

  }

  nextPage() {

  }

  previousPage() {

  }
  
}
