<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Support\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        Registered::class => [

        ],

        //Evento para registrar usuario y completar información de acuerdo al rol
        \App\Events\UserRegistered::class => [
            \App\Listeners\CompleteUserData::class
        ],

        //Evento para crear las calificaciones de un alumno
        \App\Events\StudentSchoolPeriodProcess::class => [
            \App\Listeners\GradesBySemester::class
        ],
    ]; 

    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
