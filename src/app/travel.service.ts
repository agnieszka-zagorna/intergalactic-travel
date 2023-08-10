import { Injectable } from '@angular/core';
import { Planet } from './models/planet';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  planets: Promise<Planet[]> = this.fetchPlanets()
  planetsChosen: Planet[] = []
  constructor(private readonly http: HttpClient) {
  }

  getPlanetsArray(): Promise<Planet[]>{ 
    return this.planets
  }

  async fetchPlanets() : Promise<Planet[]> {
    const allPlanets: Planet[] = [];

    let nextPageUrl = `${environment.apiUrl}`;

    while (nextPageUrl) {
      const response = await firstValueFrom(
        this.http.get<any>(nextPageUrl).pipe(
          map(r => r as { results: Planet[], next: string })
        )
      );
      allPlanets.push(...response.results);
      nextPageUrl = response.next;
    }

    allPlanets.forEach((planet) => planet.added = false)

    return allPlanets;
  }

  addPlanetToChosen(planet: Planet) {
    this.planetsChosen.push(planet)
  }

  removePlanetFromChosen(planet: Planet) {
    this.planetsChosen.splice(this.planetsChosen.indexOf(planet), 1)
  }

}
