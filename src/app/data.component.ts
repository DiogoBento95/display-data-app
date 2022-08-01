import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

export interface TeamMember {
    name: string;
    age: number;
    role: string;
  }

@Component({
    selector: 'app-data',
    template: ``,
    styleUrls: ['./app.component.css']
})
export class DataComponent {


    getTeam(): Observable<TeamMember[]> {
        return of([
          {
            name: "Diogo Bento",
            age: 26,
            role: "Frontend"
          },
          {
            name: "André Pereira",
            age: 27,
            role: "Frontend"
          },
          {
            name: "Paulo Lemos",
            age: 37,
            role: "Frontend"
          },
          {
            name: "Valentino Carreiro",
            age: 25,
            role: "Backend"
          },
          {
            name: "Salomé Câmara",
            age: 22,
            role: "Tester"
          },
          {
            name: "Nélson",
            age: 24,
            role: "Mobile"
          },
          {
            name: "John Cena",
            age: 38,
            role: "Backend"
          },
          {
            name: "Chuck Norris",
            age: 48,
            role: "Fullstack"
          }
        ])
      } 

}