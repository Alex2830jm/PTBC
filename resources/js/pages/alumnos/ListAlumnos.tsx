
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import alumno from '@/routes/alumno';
import { BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react';
import { UserPlus } from 'lucide-react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumnos',
        href: '/alumno'
    }
];

interface ListAlumnos {
    id: number,
    fecha_ingreso: Date,
    matricula: string,
    data: {
        nombres: string,
        app: string,
        apm: string,
        genero: string,
    }
}

export default function ListAlumnos({alumnos}: {alumnos: ListAlumnos[]}) {
    console.log(alumnos)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Alumnos' />
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold'>
                        Listado de Alumnos
                    </h2>

                    <div className='flex flex-row gap-2'>
                        <Link
                            href={alumno.create()}
                            className='px-2 py-2 rounded-xl border-2 border-green-200 text-center hover:bg-green-200 hover:text-black'
                        >
                            <UserPlus className='size-5' />
                        </Link>
                    </div>
                </div>
                
                <Table>
                    <TableCaption>Lista de Alumnos</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Alumno</TableHead>
                            <TableHead>Semestre</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {alumnos.map((alumno, index) => (
                            <TableRow key={index}>
                                <TableCell>{alumno.id}</TableCell>
                                <TableCell>
                                    <span className='font-semibold text-gray-200'>
                                        {`${alumno.data.nombres} ${alumno.data.app} ${alumno.data.apm}`}
                                    </span>
                                    <p className='text-sm text-gray-300'>{alumno.matricula}</p>
                                </TableCell>
                                <TableCell>Tercer Semestre</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            Opciones
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>
                                                Reporte
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    )
}
