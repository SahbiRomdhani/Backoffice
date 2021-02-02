<?php

namespace App\Repositories;

use Symfony\Component\HttpFoundation\Request;

class ProduitRepository{

    public function create(Request $request){
        $this->validate($request, [
            
            'titre' => 'required',
            'description' => 'required',
            'prix' => 'required|numeric',
            'quantite'   => 'numeric',
        ]);
        $produit = new Produit();
        $produit->titre = $request->titre;
        $produit->description = $request->description;
        $produit->prix = $request->prix;
        $produit->quantite = $request->quantite;
        $produit->user_id = 1;
        $produit->save();
         /** Save image */
         //json_decode
         if($request->hasFile('image')){
            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_produits'), $picture);
            $image->url = $picture;
            $produit->images()->save($image);

            $image->save();
        }
        
        return response()->json("Success");
    }

}