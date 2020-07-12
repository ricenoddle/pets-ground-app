import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
