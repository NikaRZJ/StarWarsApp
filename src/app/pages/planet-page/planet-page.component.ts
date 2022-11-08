import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPlanet } from 'src/app/models/planet';
import { IResident } from 'src/app/models/resident';
import { PlanetsService } from 'src/app/services/planet.service';

@Component({
    selector: 'app-planet-page',
    templateUrl: './planet-page.component.html',
    styleUrls: ['./planet-page.component.css']
})

export class PlanetPageComponent implements OnInit, OnChanges {
    private querySubscription: Subscription;

    planet: IPlanet;
    url: string;
    residents: IResident[] = [];
    viewResidents: IResident[] = [];

    constructor(private route: ActivatedRoute, private planetService: PlanetsService) {
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.url = queryParam['url'];
            }
        )
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnInit(): void {
        this.planetService.getPlanet(this.url).subscribe(planet => {
            this.planet = planet;
            this.planet.residents.forEach(url => {
                this.planetService.getResident(url).subscribe(resident => {
                    this.residents.push(resident);
                    this.viewResidents.push(resident);
                })
            })
        })
    }

    onAll(): void {
        this.viewResidents = this.residents.map(item => item);
    }

    onMale(): void {
        this.viewResidents = this.residents.filter(item => item.gender === 'male');
    }

    onFemale(): void {
        this.viewResidents = this.residents.filter(item => item.gender === 'female');
    }
}
