import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { IPlanets } from "../models/planets";
import { IPlanet } from "../models/planet";
import { IResident } from "../models/resident";

@Injectable({
    providedIn: 'root'
})


export class PlanetsService {
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<IPlanets> {
        return this.http.get<IPlanets>('https://swapi.dev/api/planets/')
    }

    getPage(url: string): Observable<IPlanets> {
        return this.http.get<IPlanets>(url)
    }

    getPlanet(url: string): Observable<IPlanet> {
        return this.http.get<IPlanet>(url)
    }

    getResident(url: string): Observable<IResident> {
        return this.http.get<IResident>(url)
    }
}
