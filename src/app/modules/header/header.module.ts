import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingRoutingModule } from 'src/app/router/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class HeaderModule { }
