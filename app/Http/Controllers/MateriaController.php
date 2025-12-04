<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materias = Materia::with([
            'docentes',
            'docentes.data:nombres,app,apm'
        ])->get();
        //return response()->json(["Materias" => $materias]);
        return Inertia::render("gestion/Materias", [
            'materias' => $materias
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $materia = Materia::create([
            "semestre_id" => $request->get('semestre_id'),
            "nombre_materia" => $request->get('nombre_materia'),
            "clave_materia" => $request->get('clave_materia'),
        ]);

        /* return response()->json([
            'message' => 'Materia Registrada Exitosamente',
            'materia' => $materia
        ]); */
        return back()
            ->with([
                'success' => 'Materia Registrada Exitosamente',
            ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
