import { ProduitService } from './../../shared/services/Produit.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produitsList:any;
  constructor(private prodService:ProduitService,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.prodService.listProduit().subscribe(res=>{
      this.produitsList=res;
      console.log("all prod", res)
    })
  }


  
  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_produits/" + imageurl));

  }

}
