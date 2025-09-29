<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Support\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        Registered::class => [

        ],

        \App\Events\UserRegistered::class => [
            \App\Listeners\CompleteUserData::class
        ]
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
