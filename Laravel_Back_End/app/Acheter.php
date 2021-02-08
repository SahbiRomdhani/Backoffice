<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Acheter extends Model
{
    protected $table='acheters';
    protected $fillable=[
        'id_user','id_produit','quantite'
    ];
}
