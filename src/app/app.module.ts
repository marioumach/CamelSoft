import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatangModule } from "../assets/matang.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FlexLayoutModule  } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CasestudiesComponent,
    PortfolioComponent,
    ContactusComponent,
    NavbarComponent,
    AcceuilComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatangModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
