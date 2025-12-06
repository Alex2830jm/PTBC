<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetalleCalificacion extends Model
{
    protected $table = "detalle_calificaciones";

    protected $fillable = [
        "calificacion_id",
        "materia_id",
        "primer_modulo",
        "segundo_modulo",
        "tercer_modulo",
        "calificacion_final",
    ];

    public function calificacion():BelongsTo {
        return $this->belongsTo(Calificacion::class, "calificacion_id");
    }

    public function materia(): BelongsTo {
        return $this->belongsTo(Materia::class, "materia_id");
    }
}
