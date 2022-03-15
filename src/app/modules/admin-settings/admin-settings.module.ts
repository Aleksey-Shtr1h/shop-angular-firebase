import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AdminSettingsComponent } from './admin-settings.component';
import { SetingsCatalogComponent } from './components/setings-catalog/setings-catalog.component';
import { AdminSettingsRouting } from 'src/app/router/admin-settings/admin-settings-routing.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepBarComponent } from '../global-components/step-bar/step-bar.component';
import { FormGenerateAttributeComponent } from '../global-components/form-generate-attribute/form-generate-attribute.component';

@NgModule({
  imports: [
    CommonModule,
    AdminSettingsRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [
    AdminSettingsComponent,
    SetingsCatalogComponent,
    MainNavComponent,
    SideBarComponent,
    StepBarComponent,
    FormGenerateAttributeComponent
  ],
  // exports: [
  //   AdminSettingsComponent
  // ]
})

export class AdminSettingsModule { }
