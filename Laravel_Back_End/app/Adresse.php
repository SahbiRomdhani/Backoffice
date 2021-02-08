<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    protected $table='adresses';
    protected $fillable=[
        'ville','code','pays','rue'
    ];


    
}
