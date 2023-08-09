import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChosenComponent } from './chosen/chosen.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { DataformComponent } from './dataform/dataform.component';

@NgModule({
  declarations: [
    AppComponent,
    ChosenComponent,
    DestinationsComponent,
    DetailsComponent,
    DataformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
