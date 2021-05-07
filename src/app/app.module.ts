import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BackendService } from './backend.service';



import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';



import { AppRouteModule } from './app-route/app-route.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    AppComponent,
  
    ContactMeComponent,
    PortfolioComponent,
    SkillComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRouteModule],

  
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
