import { ProduitService } from './../../shared/services/Produit.service';
import { Produit } from '../../shared/models/produit';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  files:any;

  constructor(private prodService:ProduitService) { }

  ngOnInit() {
  
  }
  model = new Produit()

  onSelect(event:any) {
    this.files = event.target.files[0]
    console.log(this.files)
  }
  onSubmit(prodForm:NgForm){
    //console.log('submited',prodForm.value)
    const myFormData = new FormData();
    myFormData.append('titre',prodForm.value.titre)
    myFormData.append('quantite',prodForm.value.quantite)
    myFormData.append('description',prodForm.value.description)
    myFormData.append('prix',prodForm.value.prix)
    myFormData.append('image',this.files)

    console.log('submited',myFormData)
  
    this.prodService.ajouterProd(myFormData).subscribe(res=>{
      console.log("resultat",res);
      Swal.fire({
        title: '\n' +
          'produit ajouté avec succès',
        text: "ajouter avec sucés !",
        showCancelButton: false,
        confirmButtonColor: '#298fca',
      })
    },(error: any) =>
    {
      console.log("errors Message",error.error.errors)
      console.log(error)
    })
  }

}
