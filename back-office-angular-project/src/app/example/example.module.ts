import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";
import { ListProduitComponent } from './list-produit/list-produit.component';

@NgModule({
  imports: [
    ExampleRouting,
    SharedModule
  ],
  declarations: [ListComponent, FormulaireComponent,AjouterProduitComponent, ListProduitComponent]
})
export class ExampleModule {
}
