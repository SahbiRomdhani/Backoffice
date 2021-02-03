<?php

namespace  App\Repository;

use App\Image;
use App\Produit;
use Symfony\Component\HttpFoundation\Request;

class ProduitRepository{

    public function create(Request $request){
        
        $produit = new Produit();
        $produit->titre = $request->titre;
        $produit->description = $request->description;
        $produit->prix = $request->prix;
        $produit->quantite = $request->quantite;
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