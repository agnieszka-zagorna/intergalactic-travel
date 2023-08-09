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
    const response = await firstValueFrom(
      this.http.get<any>(`${environment.apiUrl}`).pipe(
        map(r => r.results as Planet[])
        )
      );
      console.log(response)
      response.forEach((planet) => planet.added = false)

      return response
  }

  addPlanetToChosen(planet: Planet) {
    this.planetsChosen.push(planet)
  }

}
