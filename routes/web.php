<?php

use App\Http\Controllers\AlumnoController;
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

    Route::prefix('docente')->name('docente.')->group(function () {
        Route::get('/', [DocenteController::class, 'index'])->name('index');
        Route::get('/registro', [DocenteController::class, 'create'])->name('create');
        Route::post('/registro', [UserController::class, 'store'])->name('store');
        Route::get('/materias', [DocenteController::class, 'store']);
    });

    Route::prefix('alumno')->name('alumno.')->group(function () {
        Route::get('/', [AlumnoController::class, 'index'])->name('index');
        Route::get('/registro', [AlumnoController::class, 'create'])->name('create');

    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
