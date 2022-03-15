import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSettingsComponent } from 'src/app/modules/admin-settings/admin-settings.component';
import { MainNavComponent } from 'src/app/modules/admin-settings/components/main-nav/main-nav.component';
import { SetingsCatalogComponent } from 'src/app/modules/admin-settings/components/setings-catalog/setings-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsComponent,
    children: [
      { path: '', redirectTo: 'select-settings', pathMatch: 'full' },
      { path: 'select-settings', component: MainNavComponent },
      { path: 'edit-catalog', component: SetingsCatalogComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})


export class AdminSettingsRouting { }