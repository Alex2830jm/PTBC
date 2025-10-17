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
        Schema::create('materias', function (Blueprint $table) {
            $table->id();
            $table->string("nombre_materia");
            $table->string("clave_materia");
            $table->timestamps();
        });

        Schema::create('materia_has_docente', function (Blueprint $table) {
            $table->unsignedBigInteger("materia_id");
            $table->unsignedBigInteger("docente_id");

            $table->foreign("materia_id")
                ->references("id")
                ->on("materias");

            $table->foreign("docente_id")
                ->references("id")
                ->on("docentes");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materias');
    }
};
