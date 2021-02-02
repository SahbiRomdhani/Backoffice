<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Produit extends Model
{
    protected $table='produits';
    protected $fillable=[
        'titre','description','nbr_noted','is_active','image_id','reference'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
