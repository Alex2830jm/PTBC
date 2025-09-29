<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Alumno extends Model
{
    protected $table = "alumnos";
    protected $fillable = [
        "user_id",
        "fecha_ingreso",
        "matricula",
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
}
