<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Semestre extends Model
{
    protected $table = "semestres";
    protected $fillable = [
        "semestre",
        "num_semestre",
        "activo",
    ];

    public function materias(): HasMany {
        return $this->hasMany(Materia::class, 'semestre_id');
    }

    public function calificaciones(): HasMany {
        return $this->hasMany(Calificacion::class, "semestre_id");
    }

    public function ciclo_escolar(): HasMany {
        return $this->hasMany(CicloEscolar::class, 'semestre_id');
    }
}
