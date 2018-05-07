import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { VendorsComponent } from './vendors/vendors.component';
import { FunctionsComponent } from './functions/functions.component';
import { WohciComponent } from './wohci/wohci.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'wohci',
    component: WohciComponent
  },
  {
    path: 'tools',
    component: ToolsComponent 
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
