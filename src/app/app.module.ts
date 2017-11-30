import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AccountService }from './services/account.service';
import { Route } from '@angular/router/src/config';
import { AboutComponent } from './components/about/about.component';

const appRoute : Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [AccountService, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
