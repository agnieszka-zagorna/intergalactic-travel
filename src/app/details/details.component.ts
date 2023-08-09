import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { TravelService } from '../travel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  planet : Planet | null = null ;
  //planetName: string

  constructor(private service: TravelService, private route: ActivatedRoute){
  }
 
  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   //this.planet  = params['planet'];
    //   const encodedPlanetName = params['planetName']
    //   this.planetName = decodeURIComponent(encodedPlanetName)
    // });
  }

}
