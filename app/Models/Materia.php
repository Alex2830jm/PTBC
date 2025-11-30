<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Materia extends Model
{
    protected $table = "materias";
    protected $fillable = [
        "semestre_id",
        "nombre_materia",
        "clave_materia",
    ];

    public function docentes(): BelongsToMany {
        return $this->belongsToMany(Docente::class, 'materia_has_docente', 'materia_id', 'docente_id');
    }

    public function semestre(): BelongsTo {
        return $this->belongsTo(Semestre::class, 'semestre_id');
    }
}
