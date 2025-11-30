
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout'
import docente from '@/routes/docente';

import { BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import {  UserPlus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Docentes',
        href: '/docentes'
    }
];

interface ListDocentes {
    id: number,
    fecha_ingreso: Date,
    clave: string,
    profesion: string, 
    titulo_profesion: string,
    data: {
        nombres: string,
        app: string,
        apm: string,
        genero: string,
    }
}

export default function ListDocentes({docentes}: {docentes: ListDocentes[]}) {
    console.log(docentes)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Docente' />
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className='text-xl font-semibold'>
                                Listado de Docentes
                            </h2>
                        </div>

                        <div className='flex flex-row gap-2'>
                            <Link
                                href={docente.create()}
                                className='px-2 py-2 rounded-xl border-2 border-green-200 text-center hover:bg-green-200 hover:text-black'
                            >
                                <UserPlus className='size-5'/>
                            </Link>
                        </div>
                    </div>

                    <Table>
                        <TableCaption>Lista de Docentes</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Docente</TableHead>
                                <TableHead>Plantel</TableHead>
                                <TableHead>Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {docentes.map((docente, index) => (
                                <TableRow key={index}>
                                    <TableCell>{docente.id}</TableCell>
                                    <TableCell>
                                        <span className='font-semibold text-gray-200'>
                                            {`${docente.profesion} ${docente.data.nombres} ${docente.data.app} ${docente.data.apm}`}
                                        </span>
                                        <p className='text-sm text-gray-300'>{docente.titulo_profesion}</p>
                                    </TableCell>
                                    <TableCell>28</TableCell>
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
