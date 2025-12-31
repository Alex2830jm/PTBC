<?php

namespace App\Listeners;

use App\Events\StudentSchoolPeriodProcess;
use App\Models\Calificacion;
use App\Models\DetalleCalificacion;
use App\Models\Materia;
use Exception;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class GradesBySemester
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(StudentSchoolPeriodProcess $event): void
    {
        try {
            $semesterGradeReport = Calificacion::create([
                'alumno_id' => $event->alumno->id,
                'semestre_id' => $event->semestre->id,
            ]);

            $materias = Materia::where('semestre_id', $event->semestre->id)
                ->orderBy('id', 'ASC')
                ->get();

            foreach($materias as $materia) {
                DetalleCalificacion::create([
                    'calificacion_id' => $semesterGradeReport->id,
                    'materia_id' => $materia->id,
                ]);
            }

        } catch ( Exception $e ) {
            Log::error('Error al crear las calificaciones del alumno al semestre correspondiente: '. $e->getMessage(), [
                'alumno_id' => $event->alumno->id,
                'semestre_id' => $event->semestre->id,
            ]);
        }
    }
}
