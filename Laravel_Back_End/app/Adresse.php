<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    protected $table='adresse';
    protected $fillable=[
        'ville','code_postal','pays','rue'
    ];


    
}
