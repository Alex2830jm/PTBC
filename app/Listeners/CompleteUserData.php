<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Models\Alumno;
use App\Models\DataUser;
use App\Models\Docente;
use Exception;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class CompleteUserData
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistered $event): void
    {
        try {
            $user = $event->user;
            $requestData = $event->request;

            $this->completeDataUser($user, $requestData);
            $this->assigRoleData($user, $requestData);

        } catch (Exception $e) {
            Log::error("Error al completar los datos del usuario: " . $e->getMessage(), [
                'user_id' => $event->user->id,
                'request_data' => $event->request,
            ]);

            throw $e;
        }
    }

    //Completar datos del usuario en tabla data_users
    private function completeDataUser($user, $requestData): void {
        DataUser::updateOrCreate(
            ["user_id" => $user->id],
            [
                "nombres" => $requestData["nombres"],
                "app" => $requestData["app"],
                "apm" => $requestData["apm"] ?? null,
                "fecha_nacimiento" => $requestData["fecha_nacimiento"],
                "curp" => $requestData["curp"],
                "genero" => $requestData["genero"],
            ]
        );
    }

    private function assigRoleData($user, $requestData): void {
        $roleId = $requestData["role_id"] ?? null;
        switch($roleId) {
            case 1:
                $this->createAlumno($user, $requestData);
                break;
            case 2:
                $this->createDocente($user, $requestData);
                break;
            default:
                Log::warning("Role ID no reconocido, ['role_id' => $roleId, 'user_id' => $user->id]");
                break;
        }
    }

    private function createAlumno($user, $requestData): void {
        Alumno::create([
            "user_id" => $user->id,
            "fecha_ingreso" => $requestData["fecha_ingreso"],
            "matricula" => $requestData["matricula"],
        ]);
    }

    private function createDocente($user, $requestData): void {
        Docente::create([
            "user_id" => $user->id,
            "fecha_ingreso" => $requestData["fecha_ingreso"],
            "clave" => $requestData["clave"],
            "profesion" => $requestData["profesion"],
            "titulo_profesion" => $requestData["titulo_profesion"],
        ]);
    }
}
