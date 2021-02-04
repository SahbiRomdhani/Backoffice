import { SliderComponent } from './slider/slider.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent ,children:
[
  {
    path: 'accueil',component: AccueilComponent,
  },
  {
    path: 'list-produit',component: ListProduitsComponent,
  },
  {
    path: 'slider',component: SliderComponent,
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
