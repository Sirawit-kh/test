import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillComponent } from '../skill/skill.component';
import { AboutMeComponent } from '../about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-me'
    },
  {
  path: 'about-me',
  component: AboutMeComponent
  },
  {
  path: 'skill',
  component: SkillComponent
  },
  {
  path: 'contact-me',
  component: ContactMeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
    },
    
  {
  path: '**',
  component: PageNotFoundComponent
  }
  ];
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
