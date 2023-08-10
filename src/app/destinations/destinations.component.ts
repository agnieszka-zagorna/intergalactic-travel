import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { TravelService } from '../travel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  planets: Planet[] | null = null
  copyOfPlanets: Planet[] | null = null
  selectedClimate = '';
  selectedTerrain = '';
  sortedAlphabetically = false;

  constructor(private readonly travelService: TravelService, private router : Router) {}

  async ngOnInit() {
    this.planets = await this.travelService.getPlanetsArray()
    this.copyOfPlanets = this.planets
  }

  movePlanet(planet: Planet){
    if(!planet.added) {
      planet.added = true
      this.travelService.addPlanetToChosen(planet)
    } else {
      planet.added = false
      this.travelService.removePlanetFromChosen(planet)
    }
  }

  filter(selectedClimate: string, selectedTerrain: string) {
    this.planets = this.copyOfPlanets
    this.sortedAlphabetically = false

    if(this.planets !== null && selectedClimate !== undefined && selectedClimate !== '') {
      this.planets = this.planets.filter((planet) => {
        const planetClimates = planet.climate.split(',').map(climate => climate.trim())
        return planetClimates.includes(selectedClimate)
    })
    }

    if(this.planets !== null && selectedTerrain !== undefined && selectedTerrain !== '') {
      this.planets = this.planets.filter((planet) => {
        const planetTerrains = planet.terrain.split(',').map(terrain => terrain.trim())
        return planetTerrains.includes(selectedTerrain)
    })
    }
  }

  sortAlphabetically() {
    if(this.planets !== null) {
      this.sortedAlphabetically = true
      this.planets = this.planets.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

}
