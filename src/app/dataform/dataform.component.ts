import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent {

  constructor(private formBuilder: FormBuilder, private travelService : TravelService){
  }

  userForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    people: ['', Validators.required],
  });

  submit(event: Event) {
    if (this.userForm.valid) {
      //TODO
    }
  }

}
