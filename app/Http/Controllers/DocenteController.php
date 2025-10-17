<?php

namespace App\Http\Controllers;

use App\Models\Docente;
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
        return Inertia::render('docentes/CreateDocente');
    }

    public function store(Request $request) {
        $docentes = Docente::with('materias')->get();
        return response()->json(["docentes" => $docentes]);
    }
}
