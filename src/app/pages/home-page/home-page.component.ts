import { Component, OnInit } from '@angular/core';
import { IPlanets } from 'src/app/models/planets';
import { PlanetsService } from 'src/app/services/planet.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

    title = 'star wars';

    planets: IPlanets = { count: 0, next: '', previous: '', results: [] };

    constructor(private planetsService: PlanetsService) {

    }

    ngOnInit(): void {
        this.planetsService.getAll().subscribe(planets => {
            this.planets = planets;
        })
    }

    next(): void {

        if (this.planets.next) {
            this.planetsService.getPage(this.planets.next).subscribe(planets => {
                this.planets = planets;
            })
        }
    }

    prev(): void {
        if (this.planets.previous) {
            this.planetsService.getPage(this.planets.previous).subscribe(planets => {
                this.planets = planets;
            })
        }
    }

}
