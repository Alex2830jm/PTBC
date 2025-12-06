<?php

namespace App\Http\Controllers;

use App\Emuns\Roles;
use App\Http\Controllers\Controller;
use App\Models\Materia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CalificacionController extends Controller
{
    public function listMaterias() {
        $user = Auth::user();
        $docente = $user->docente;        
        $materias = Materia::whereHas("docentes", function ($query) use ($docente) {
            $query->where("id", $docente->id);
        })
        ->orderBy('semestre_id', 'asc')->get();  
                
        return Inertia::render('calificaciones/index', [
            'materias' => $materias,
        ]);
    }
}
