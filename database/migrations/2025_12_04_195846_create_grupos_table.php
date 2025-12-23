<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grupos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("semestre_id");
            $table->unsignedBigInteger("plantel_id");
            $table->string("nombre_grupo");
            $table->boolean('activo');

            $table->foreign("semestre_id", "fk_grupo_semestre")
                ->references("id")
                ->on("semestres");

            $table->foreign("plantel_id", "fk_grupo_plante")
                ->references("id")
                ->on("planteles");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grupos');
    }
};
