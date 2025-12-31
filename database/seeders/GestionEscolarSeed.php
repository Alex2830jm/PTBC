<?php

namespace Database\Seeders;

use App\Models\Materia;
use App\Models\Plantel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GestionEscolarSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Registro de Semestres
        DB::table('semestres')->insert([
            ['semestre' => 'Primer Semestre', 'num_semestre' => 1, 'activo' => true,],
            ['semestre' => 'Segundo Semestre', 'num_semestre' => 2, 'activo' => false,],
            ['semestre' => 'Tercer Semestre', 'num_semestre' => 3, 'activo' => true,],
            ['semestre' => 'Cuarto Semestre', 'num_semestre' => 4, 'activo' => false,],
            ['semestre' => 'Quinto Semestre', 'num_semestre' => 5, 'activo' => true,],
            ['semestre' => 'Sexto Semestre', 'num_semestre' => 6, 'activo' => false,],
        ]);

        //Registro de Planteles
        Plantel::insert([
            ['num_plantel' => '28', 'nombre_plantel' => 'Santa Catarina Tabernillas', 'domicilio' => 'Manzana 001, 50910 Tabernillas, Méx.'],
            ['num_plantel' => '30', 'nombre_plantel' => 'San Miguel Almoloyan', 'domicilio' => 'Manzana 027, 50906 San Miguel Almoloyán, Méx.'],
            //['num_plantel' => '', 'nombre_plantel' => '', 'domicilio' => ''],
        ]);

        //Registro de Materias
        Materia::insert([
            ['semestre_id' => 1, 'nombre_materia' => 'Lengua, comunicación y cultura digital I', 'clave_materia' => 'LCC - 01'],
            ['semestre_id' => 1, 'nombre_materia' => 'Materia, pensamiento matemático y tecnología', 'clave_materia' => 'MPMT - 01'],
            ['semestre_id' => 1, 'nombre_materia' => 'Sociedad y cultura I', 'clave_materia' => 'SC - 01'],
        ]);
    }
}
