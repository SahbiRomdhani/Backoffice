import { ProduitService } from './../../shared/services/Produit.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swal from 'sweetalert2';

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

  delete(id: any) {

    console.log(id);
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        return this.prodService.deleteproduit(id).subscribe(data => {
            console.log("sucess");
            Swal.fire(
              'Deleted!',
              'produit a été supprimé.',
              'success'
            )
            window.location.reload();
            //this.router.navigate["/home"];

          },
          error => {
            console.log(error);
          }
        );
      }
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Votre produit est sécurisé :)',
          'error'
        )
      }
    }) 

  


}
