import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PrestationsComponent } from "./prestations/prestations.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { ContactComponent } from './contact/contact.component';
import { ServiceOneComponent } from "./service-one/service-one.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'realisations', component: AchievementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service-one', component: ServiceOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
