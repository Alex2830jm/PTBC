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
        Schema::create('calificaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("alumno_id");
            $table->unsignedBigInteger("semestre_id");
            $table->double("promedio_general");

            $table->foreign("alumno_id")
                ->references("id")
                ->on("alumnos");

            $table->foreign("semestre_id")
                ->references("id")
                ->on("semestres");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calificacions');
    }
};
