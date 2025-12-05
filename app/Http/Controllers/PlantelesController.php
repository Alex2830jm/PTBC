<?php

namespace App\Http\Controllers;

use App\Models\Grupo;
use App\Models\Plantel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlantelesController extends Controller
{
    public function listPlanteles() {
        $planteles = Plantel::all();
        return Inertia::render('gestion/Planteles', [
            'planteles' => $planteles,
        ]);
    }

    public function storePlantel(Request $request) {
        //dd($request);
        Plantel::create([
            "num_plantel"       => $request->get('num_plantel'),
            "nombre_plantel"    => $request->get('nombre_plantel'),
            "domicilio"         => $request->get('domicilio'),
        ]);

        /* return response()->json([
            "message" => "El plantel se ha registrado correctamente"
        ]); */

        return redirect()->back()->with('success', 'El plantel se ha registrado correctamente');
    }

    public function listGruposByPlantel(string $plantel) {
        $grupos = Grupo::where('plantel_id', $plantel)->orderBy('semestre_id')->get();
        //return response()->json($grupos);
        return Inertia::render('gestion/Grupos', [
            'grupos' => $grupos,
        ]);
    }
}
