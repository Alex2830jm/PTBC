<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CicloEscolar extends Model
{
    protected $table = 'ciclos_escolares';
    protected $fillable = [
        'semestre_id',
        'nombre_ciclo',
        'fecha_inicio',
        'fecha_fin',
    ];

    public function semestre(): BelongsTo {
        return $this->belongsTo(Semestre::class, 'semestre_id');
    }
}
