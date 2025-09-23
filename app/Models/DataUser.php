<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class DataUser extends Model
{
    protected $table = "data_users";
    protected $fillable = [
        "user_id",
        "nombres",
        "app",
        "apm",
        "fecha_nacimiento",
        "curp",
        "genero"
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class, "user_id");
    }
}
