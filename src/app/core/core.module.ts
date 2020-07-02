import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
