<?php

use App\Http\Controllers\DocenteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('docente', [DocenteController::class, 'index'])
        ->name('docente.index');

    Route::get('docente/register', [DocenteController::class, 'create'])
        ->name("docentes.create");

    Route::post("docente/register", [UserController::class, 'store'])
        ->name('docentes.store');

    Route::get('alumnos', function () {
        return Inertia::render('pages/docentes');
    })->name('alumnos.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
