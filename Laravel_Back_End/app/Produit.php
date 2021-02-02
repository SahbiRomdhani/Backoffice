<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Produit extends Model
{
    protected $table='produits';
    protected $fillable=[
        'titre','description','prix','quantite'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
