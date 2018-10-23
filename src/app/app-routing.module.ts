import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ApartmentComponent } from './components/apartment/apartment.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:url', component: ApartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
