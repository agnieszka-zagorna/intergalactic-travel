import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { DataformComponent } from './dataform/dataform.component';

const routes: Routes = [
   {
    path: '',
    component: AppComponent,
    
  },
  {
    path: 'details/:planet.name',
    component: DetailsComponent,
    
  },
  {
    path: 'dataform',
    component: DataformComponent,
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
