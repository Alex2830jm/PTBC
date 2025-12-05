<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Docente extends Model
{
    protected $table = "docentes";
    protected $fillable = [
        "user_id",
        "plantel_id",
        "fecha_ingreso",
        "clave",
        "profesion",
        "titulo_profesion"
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class, "user_id");
    }

    public function data(): HasOneThrough {
        return $this->hasOneThrough(
            DataUser::class,
            User::class,
            'id',
            'user_id',
            'user_id',
            'id'
        );
    }

    public function materias(): BelongsToMany {
        return $this->belongsToMany(Materia::class, 'materia_has_docente', 'docente_id', 'materia_id');
    }
}
