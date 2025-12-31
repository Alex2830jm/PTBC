import React, { useState } from 'react'
import UserController from '@/actions/App/Http/Controllers/UserController'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Form, Head } from '@inertiajs/react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { ChevronDownIcon, LoaderCircle } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Registro de Docentes',
        href: '/docentes'
    }
];

interface ListSemestreMaterias {
    id: number;
    semestre: string;
    materias: [
        {
            id: number;
            nombre_materia: string;
            clave_materia: string;
        }
    ];
}

export default function CreateDocente({semestres}: {semestres: ListSemestreMaterias[]}) {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Registro de Docentes" />
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Formulario para el registro de un docente
                    </h2>
                </div>

                <Form
                    {...UserController.store.form()}
                    disableWhileProcessing
                >
                    {({ processing }) => (
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                            <Input type='hidden' name='role_id' value={2} />

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

                            {/* <div className=" grid w-full max-w-sm items-center gap-3">
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
                            </div> */}

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
                                    className='flex flex-row'
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
                                <Label htmlFor="clave">
                                    Clave del Docente:
                                </Label>
                                <Input type="text" name="clave" id="clave" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="profesion">
                                    Profesion del Docente:
                                </Label>
                                <Input
                                    type="text"
                                    name="profesion"
                                    id="profesion"
                                    placeholder="Ing., Mtro., Lic., etc"
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="titilo_profesion">
                                    Titulo de Profesion:
                                </Label>
                                <Input
                                    type="text"
                                    name="titulo_profesion"
                                    id="titulo_profesion"
                                    placeholder='Licenciado/Ingeniero en ...'
                                />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="fecha_ingreso">
                                    Fecha de Ingreso
                                </Label>
                                {/* <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <div className='flex w-full max-w-sm items-center gap-2'>
                                            <Input 
                                                type='text' 
                                                name='fecha_ingreso'
                                                id='fecha_ingreso'
                                                value={date ? date.toLocaleDateString() : "Ingresa la fecha de ingreso"}
                                            />
                                            <Button
                                                type='button'
                                                variant='outline'
                                                size='icon'
                                            >
                                                <ChevronDownIcon />
                                            </Button>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                                        <Calendar
                                            mode='single'
                                            selected={date}
                                            captionLayout='dropdown'
                                            onSelect={(date) => {
                                                setDate(date);
                                                setOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover> */}
                                <Input
                                    type='date'
                                    id='fecha_ingreso'
                                    placeholder=''
                                    name='fecha_ingreso'
                                />
                            </div>

                            <div className='col-span-full'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                    {semestres.map(({id, semestre, materias}) => (
                                        <>
                                            <Card key={id}>
                                                <CardHeader>
                                                    <CardTitle>{semestre}</CardTitle>
                                                    <CardContent>
                                                        <div className='flex flex-col gap-2'>
                                                            {materias.map(({id, nombre_materia, clave_materia}) => (
                                                                <div className='flex items-center gap-3'>
                                                                    <Checkbox value={id} name='materia_id[]' id={clave_materia}/>
                                                                    <Label htmlFor={clave_materia} >{nombre_materia}</Label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </CardHeader>
                                            </Card>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div className="col-span-full border border-gray-200 dark:border-foreground" />

                            <Button 
                                type="submit"
                                data-test="register-user-button"
                            >
                                {processing && (
                                    <LoaderCircle className='h-4 w-4 animate-spin' />
                                )}
                                Guardar Datos del Docente
                            </Button>
                        </div>

                    )}
                </Form>
            </div>
            
        </AppLayout>
    );
}
