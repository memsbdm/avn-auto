import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { LandingVideoComponent } from './landing-video/landing-video.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PrestationsComponent } from './prestations/prestations.component';
import { PrestationsServicesComponent } from './prestations-services/prestations-services.component';
import { BigServicesComponent } from './big-services/big-services.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { TableComponent } from './table/table.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { ServiceThreeComponent } from './service-three/service-three.component';
import { ServiceFourComponent } from './service-four/service-four.component';
import { ServiceFiveComponent } from './service-five/service-five.component';
import { ServiceSixComponent } from './service-six/service-six.component';
import { ServiceSevenComponent } from './service-seven/service-seven.component';
import { ServiceEightComponent } from './service-eight/service-eight.component';
import { ServiceNineComponent } from './service-nine/service-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    HomeServicesComponent,
    LandingVideoComponent,
    FaqComponent,
    FooterComponent,
    ContactComponent,
    FormComponent,
    PrestationsComponent,
    PrestationsServicesComponent,
    BigServicesComponent,
    AchievementsComponent,
    ServiceOneComponent,
    ServiceDetailComponent,
    TableComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    ServiceSixComponent,
    ServiceSevenComponent,
    ServiceEightComponent,
    ServiceNineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
