import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNewsComponent } from './component-news/component-news.component';
import { ComponentMatchComponent } from './component-match/component-match.component';
import { ComponentSigninComponent } from './component-signin/component-signin.component';
import { HOMEComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNewsComponent,
    ComponentMatchComponent,
    ComponentSigninComponent,
    HOMEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
