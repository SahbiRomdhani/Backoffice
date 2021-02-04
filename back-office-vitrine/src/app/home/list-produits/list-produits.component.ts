import { ProduitService } from './../../shared/services/produit-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  listprod:any;
  constructor(private produitServ:ProduitService) { }

  ngOnInit(): void {
    this.produitServ.listProduit().subscribe((data)=>{
      console.log("list produits",data)
      this.listprod = data;
    })
  }

}
