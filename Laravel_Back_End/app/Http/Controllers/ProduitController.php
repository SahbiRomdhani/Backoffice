<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProduitRequest;
use App\Image;
use App\Produit;
use App\Repository\ProduitRepository;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    private $prodrep;
    public function __construct(ProduitRepository $prodrep)
    {
        $this->prodrep = $prodrep;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produits = Produit::orderBy('id','DESC')
        ->with('images')
        ->get();
        return response()->json($produits);

    }

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prodCreated = $this->prodrep->create($request);
        return $prodCreated;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $findproduit = Produit::find($id) ->with('images')->get();
        return response()->json("Sucess");
        
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $findproduit = Produit::find($id);
        $findproduit->titre = $request->titre;
        $findproduit->descrption = $request->descrption;
        $findproduit->prix = $request->prix;
        $findproduit->quantite = $request->quantite;
        /** Save image */

        if($request->hasFile('image')){
            $imageold = Image::where('owner_id',$id)->first()->delete();

            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_categorie'), $picture);
            $image->url = $picture;
            $findproduit->images()->save($image);

            $image->save();
        }
        return response()->json('updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produitdeleted = Produit::findOrFail($id);
        $image = Image::where('owner_id',$id)->first()->delete();
 
        $produitdeleted->delete();
       return response()->json('done');
    }
}
