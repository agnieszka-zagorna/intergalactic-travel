import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-chosen',
  templateUrl: './chosen.component.html',
  styleUrls: ['./chosen.component.css']
})
export class ChosenComponent implements OnInit {
  planetsChosen: Planet[] | null = null

  constructor(private readonly travelService: TravelService) {}

  async ngOnInit() {
    this.planetsChosen = this.travelService.planetsChosen
  }
}
