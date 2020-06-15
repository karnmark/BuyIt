import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';

const routes = [];


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class PartialsModule { }
