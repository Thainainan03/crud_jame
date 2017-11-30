import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AccountService }from './services/account.service';
import { Route } from '@angular/router/src/config';

const appRoute : Routes = [
  {path:'',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
