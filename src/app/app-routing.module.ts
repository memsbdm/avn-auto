import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PrestationsComponent } from "./prestations/prestations.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { ContactComponent } from './contact/contact.component';
import { ServiceOneComponent } from "./service-one/service-one.component";
import {ServiceTwoComponent} from "./service-two/service-two.component";
import {ServiceThreeComponent} from "./service-three/service-three.component";
import {ServiceFourComponent} from "./service-four/service-four.component";
import {ServiceFiveComponent} from "./service-five/service-five.component";
import {ServiceSixComponent} from "./service-six/service-six.component";
import {ServiceSevenComponent} from "./service-seven/service-seven.component";
import {ServiceEightComponent} from "./service-eight/service-eight.component";
import {ServiceNineComponent} from "./service-nine/service-nine.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'realisations', component: AchievementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service-one', component: ServiceOneComponent },
  { path: 'service-two', component: ServiceTwoComponent },
  { path: 'service-three', component: ServiceThreeComponent },
  { path: 'service-four', component: ServiceFourComponent },
  { path: 'service-five', component: ServiceFiveComponent },
  { path: 'service-six', component: ServiceSixComponent },
  { path: 'service-seven', component: ServiceSevenComponent },
  { path: 'service-eight', component: ServiceEightComponent },
  { path: 'service-nine', component: ServiceNineComponent },
];

RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
