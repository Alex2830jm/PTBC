<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Grupo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GestionEscolarController extends Controller
{
    public function indexCicloEscolar() {
        $grupos = Grupo::where('plantel_id', 1)->orderBy('id', 'ASC')->get();
        return Inertia::render('gestion/CiclosEscolares', [
            'grupos' => $grupos
        ]);
    }

    public function updatePeriodoEscolar($plantel) {
        $allGrupos = Grupo::where('plantel_id', $plantel)->get();

        foreach($allGrupos as $i => $grupo) {
            Grupo::find($grupo->id)
                ->update([
                    'activo' => !$grupo->activo,
                ]);
        }
        
        return back()
            ->with([
                'success' => 'Se ha actualizado el periodo escolar correctamente'
            ]);
    }
}
