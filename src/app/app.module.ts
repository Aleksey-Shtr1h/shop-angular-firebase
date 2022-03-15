import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { InlineSVGModule } from 'ng-inline-svg';

import { environment } from 'src/environments/environment';

import { HeaderModule } from './modules/header/header.module';
import { AppRoutingRoutingModule } from './router/app/app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    AppRoutingRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor() {
    initializeApp(environment.firebase);
  }
}
