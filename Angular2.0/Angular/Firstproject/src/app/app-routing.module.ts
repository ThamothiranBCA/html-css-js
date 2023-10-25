import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentSigninComponent } from './component-signin/component-signin.component';
import { ComponentMatchComponent } from './component-match/component-match.component';
import { HOMEComponent } from './home/home.component';
import { ComponentNewsComponent } from './component-news/component-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HOMEComponent },

  { path: 'match', component: ComponentMatchComponent },

  { path: 'news', component: ComponentNewsComponent},

  {path: 'signin' ,component:ComponentSigninComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
