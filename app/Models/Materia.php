<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Materia extends Model
{
    protected $table = "materias";
    protected $fillable = [
        "nombre_materia",
        "clave_materia",
    ];

    public function docentes(): BelongsToMany {
        return $this->belongsToMany(Docente::class, 'materia_has_docente', 'materia_id', 'docente_id');
    }
}
