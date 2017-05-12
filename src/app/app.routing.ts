import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'app/about/about.component';
import { AllAgnosticsComponent } from 'app/all-agnostics/all-agnostics.component';
import { AdminComponent } from 'app/admin/admin.component';
import { MemberDetailComponent } from 'app/member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllAgnosticsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
