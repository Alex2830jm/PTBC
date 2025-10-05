import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import UserController from '@/actions/App/Http/Controllers/UserController';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Form, Head } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { LoaderCircle } from 'lucide-react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Registro de Alumnos',
        href: '/alumno'
    }
];

export default function CreateAlumnos() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Registro de Alumnos' />
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold'>
                        Formulario para el registro de un alumno
                    </h2>
                </div>

                <Form
                    {...UserController.store.form()}
                    disableWhileProcessing
                >
                    {({ processing, errors }) => (
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="nombres">Nombres(s): </Label>
                                <Input
                                    type="text"
                                    id="nombres"
                                    placeholder="Nombre(s)"
                                    name="nombres"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="app">Apellido Paterno: </Label>
                                <Input
                                    type="text"
                                    id="apm"
                                    placeholder=""
                                    name="app"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="apm">Apellido Materno: </Label>
                                <Input
                                    type="text"
                                    id="apm"
                                    placeholder=""
                                    name="apm"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="name">Usuario: </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder=""
                                    name="name"
                                    
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="email">
                                    Correo Electronico:{' '}
                                </Label>
                                <Input
                                    type="text"
                                    id="email"
                                    placeholder=""
                                    name="email"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="password">Contraseña: </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder=""
                                    name="password"
                                />
                            </div>

                            <div className=" grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="role_id">Rol: </Label>
                                <RadioGroup
                                    name='role_id'
                                    id='role_id'
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="1" id="Alumno" />
                                        <Label htmlFor="Alumno">Alumno</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="2" id="2" />
                                        <Label htmlFor="2">Docente</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="fecha_nacimiento">
                                    Fecha Nacimiento:
                                </Label>
                                <Input
                                    type="date"
                                    id="fecha_nacimiento"
                                    placeholder=""
                                    name="fecha_nacimiento"
                                />
                            </div>

                            <div className=" grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="genero">Genero: </Label>
                                <RadioGroup
                                    name='genero'
                                    id='genero'
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="M" id="M" />
                                        <Label htmlFor="M">Masculino</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="F" id="F" />
                                        <Label htmlFor="F">Femenino</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="col-span-full grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor='curp'>C.U.R.P. :</Label>

                                <InputOTP name='curp' maxLength={18} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                        <InputOTPSlot index={6} />
                                        <InputOTPSlot index={7} />
                                        <InputOTPSlot index={8} />
                                        <InputOTPSlot index={9} />
                                        <InputOTPSlot index={10} />
                                        <InputOTPSlot index={11} />
                                        <InputOTPSlot index={12} />
                                        <InputOTPSlot index={13} />
                                        <InputOTPSlot index={14} />
                                        <InputOTPSlot index={15} />
                                        <InputOTPSlot index={16} />
                                        <InputOTPSlot index={17} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="fecha_ingreso">
                                    Fecha de Ingreso
                                </Label>
                                <Input
                                    type="date"
                                    name="fecha_ingreso"
                                    id="fecha_ingreso"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="matricula">
                                    Matricula:
                                </Label>
                                <Input
                                    type="text"
                                    name="matricula"
                                    id="matricula"
                                />
                            </div>

                            <div className="col-span-full border border-gray-200 dark:border-foreground" />

                            

                            <Button
                                type="submit"
                                data-test="register-user-button"
                            >
                                {processing && (
                                    <LoaderCircle className='h-4 w-4 animate-spin' />
                                )}
                                Guardar Datos del Alumno
                            </Button>
                        </div>
                    )}
                </Form>
            </div>
        </AppLayout>
    )
}
