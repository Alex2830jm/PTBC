<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlumnoController extends Controller
{
    public function index() {
        $alumnos = Alumno::with('data')->get();
        //return response()->json($alumnos);
        return Inertia::render('alumnos/ListAlumnos', [
            'alumnos' => $alumnos
        ]);
    }

    public function create() {
        return Inertia::render('alumnos/CreateAlumnos');
    }
}
