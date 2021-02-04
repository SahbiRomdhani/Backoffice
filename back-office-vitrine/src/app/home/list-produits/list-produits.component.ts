import { ProduitServicesService } from './../../shared/services/produit-services.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  listprod:any;
  constructor(private produitServ:ProduitServicesService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.produitServ.listProduit().subscribe((data)=>{
      console.log("list produits",data)
      this.listprod = data;
    })
  }
  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_produits/" + imageurl));

  }

}
