<?php

namespace App\Http\Controllers;

use App\Models\Docente;
use App\Models\Semestre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocenteController extends Controller
{
    public function index() {
        $docentes = Docente::with('data')->get();
        //return response()->json($docentes);
        return Inertia::render('docentes/ListDocentes', [
            'docentes' => $docentes,
        ]);
    }

    public function create() {
        $semestres = Semestre::with('materias')->get();
        //return response()->json($semestres);
        return Inertia::render('docentes/CreateDocente', [
            'semestres' => $semestres
        ]);
    }

    public function store(Request $request) {
        $docentes = Docente::with('materias')->get();
        return response()->json(["docentes" => $docentes]);
    }
}
