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

  constructor(private readonly travelService: TravelService, private router : Router) {}

  async ngOnInit() {
    this.planets = await this.travelService.getPlanetsArray()
  }

  addPlanet(planet: Planet){
    if(!planet.added) {
      planet.added = true
      this.travelService.addPlanetToChosen(planet)
    }
  }

  // showDetails(planet: Planet){
  //   this.router.navigate(["/details", planet]);
  // }

  // encodePlanetName(name: string): string {
  //   return encodeURIComponent(name)
  // }

}
