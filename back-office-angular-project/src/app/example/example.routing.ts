import { ListProduitComponent } from './list-produit/list-produit.component';
import { FullLayoutComponent } from '../full-layout/full-layout.component';
// Layouts
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListComponent} from "./list/list.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import { AjouterProduitComponent } from "./ajouter-produit/ajouter-produit.component";

export const routes: Routes = [

  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'formulaire',
    component: FormulaireComponent
  }, {
    path: 'ajouterproduit',
    component: AjouterProduitComponent
  }
  , {
    path: 'listproduit',
    component: ListProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRouting {
}
