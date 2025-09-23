<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Planteles extends Model
{
    protected $table = "planteles";
    protected $fillable = [
        "nombre_plantel",
        "domicilio",
    ];
}
