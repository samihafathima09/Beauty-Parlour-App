import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {ServicesComponent} from './components/services/services.component';
import {PromotionsComponent} from './components/promotions/promotions.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
