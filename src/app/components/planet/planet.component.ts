import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IPlanet } from 'src/app/models/planet';

@Component({
    selector: 'app-planet',
    templateUrl: 'planet.component.html',
    styleUrls: ['./planet.component.css']
})


export class PlanetComponent {
    @Input() planet: IPlanet;
}