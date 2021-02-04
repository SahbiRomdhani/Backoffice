import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SliderComponent } from './slider/slider.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, AccueilComponent, SliderComponent, ListProduitsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
