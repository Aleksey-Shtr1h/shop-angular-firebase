import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminSettingsComponent } from 'src/app/modules/admin-settings/admin-settings.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full' },
  { 
    path: 'admin-settings',
    loadChildren: () => import('../../modules/admin-settings/admin-settings.module').then(m => m.AdminSettingsModule) 
  },
  // { path: 'set', component: AdminSettingsComponent },
  // { path: 'sign-in', component: MainNotAuthComponent },
  // { path: 'sign-up', component: MainNotAuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingRoutingModule { }
