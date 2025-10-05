<?php

namespace App\Http\Requests;

use App\Models\Generos;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ValidationRegisterUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|max:255|unique:'.User::class,
            'password' => 'required|string',
            "nombres" => 'required|string|max:255',
            "app" => 'required|string|max:255',
            "apm" => 'string|max:255',
            "fecha_nacimiento" => ['required', Rule::date()->format('Y-m-d')],
            "curp" => 'required|string|max:20',
            "genero" => ['required', [Rule::enum(Generos::class)]],
        ];
    }
}
