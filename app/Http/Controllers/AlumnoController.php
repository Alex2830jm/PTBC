<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AlumnoController extends Controller
{
    public function index() {
        //$alumnos = Alumno::with('data')->get();
        $alumnos = DB::select("SELECT * FROM list_alumnos");
        //return response()->json($alumnos);
        return Inertia::render('alumnos/ListAlumnos', [
            'alumnos' => $alumnos
        ]);
    }

    public function create() {
        return Inertia::render('alumnos/CreateAlumnos');
    }
}
