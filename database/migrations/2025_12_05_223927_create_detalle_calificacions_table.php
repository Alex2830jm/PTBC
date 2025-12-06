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
        Schema::create('detalle_calificaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("calificacion_id");
            $table->unsignedBigInteger("materia_id");
            $table->double("primer_modulo");
            $table->double("segundo_modulo");
            $table->double("tercer_modulo");
            $table->double("calificacion_final");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_calificacions');
    }
};
