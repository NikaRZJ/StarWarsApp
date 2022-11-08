import { IPlanet } from "./planet"

export interface IPlanets {
    count: number,
    next: string,
    previous: string,
    results: IPlanet[]
}