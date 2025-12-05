<?php

namespace App\Emuns;

enum Roles: int
{
    case ADMIN = 1;
    case COORDIONADOR = 2;
    case DOCENTE = 3;
    case ALUMNO = 4;
}
