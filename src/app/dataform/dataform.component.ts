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
    firstname: ['', [Validators.required]],//, Validators.pattern('^[a-zA-Z]+$')]],
    lastname: ['', [Validators.required]],//, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', Validators.required],
    phone: ['', Validators.required],

  });

  submit(event: Event) {
    if (this.userForm.valid) {
      //TODO

      // const newContact: Contact = {
      //   firstname: this.userForm.value.firstname as string,
      //   lastname: this.userForm.value.lastname as string,
      //   street: this.userForm.value.street as string,
      //   city: this.userForm.value.city as string,
      // };
      // this.contactservice.addContact(newContact);
      // console.log(newContact)


    }
  }

}
