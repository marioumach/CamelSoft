import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about-us",
    component: AboutusComponent 
  },
  {
    path: "contact-us",
    component: ContactusComponent
  },
  {
   
    path: "case-studies",
    component: CasestudiesComponent

  },
  
  {
    path: "portfolio",
    component:PortfolioComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
