import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CanDeactiveWithoutSaveGuard } from './shared/route-guard/can-deactive-without-save.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then((m) => m.PetsModule),
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canDeactivate: [CanDeactiveWithoutSaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
