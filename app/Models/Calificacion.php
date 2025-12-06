<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Calificacion extends Model
{
    protected $table = "calificaciones";

    protected $fillable = [
        "alumno_id",
        "semestre_id",
        "promedio_general",
    ];

    public function detalles(): HasMany{
        return $this->hasMany(DetalleCalificacion::class, "calificacion_id");
    }

    public function alumno(): BelongsTo {
        return $this->belongsTo(Alumno::class, "alumno_id");
    }

    public function semestre(): BelongsTo {
        return $this->belongsTo(Semestre::class, "semestre_id");
    }
}
