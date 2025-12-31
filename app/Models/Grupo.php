<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $table = "grupos";
    protected $fillable = [
        "semestre_id",
        "plantel_id",
        "nombre_plantel",
        "activo"
    ];
}
