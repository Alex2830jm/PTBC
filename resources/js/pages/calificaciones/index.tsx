import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react';
import { ChartColumn, FileText, MoreVertical } from 'lucide-react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Calificaciones',
        href: '/calificaciones/',
    }
];

interface listMaterias {
    id: number,
    semestre_id: number,
    nombre_materia: string,
    clave_materia: string,
}

export default function index({materias}: {materias: listMaterias[]}) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Calificaciones' />

        <div className='flex flex-col space-y-6'>
            <div className='flex flex-row items-center justify-between'>
                <h3 className='text-xl font-semibold'>Calificaciones</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {materias.map(({id,semestre_id, nombre_materia, clave_materia}) => (
                    <Item variant='outline'>
                        <ItemContent>
                            <ItemTitle>{nombre_materia}</ItemTitle>
                            <ItemDescription>
                                Materia del semestre {semestre_id}
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            {/* <Button
                                variant='outline'
                                size='sm'
                                className='cursor-pointer'
                            >
                                Subir Calificaciones
                            </Button> */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant='ghost'
                                        className='size-8 p-0'>
                                        <MoreVertical />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Subir Calificaciones
                                        <DropdownMenuShortcut>
                                            <ChartColumn />
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Ver Calificaciones
                                        <DropdownMenuShortcut>
                                            <ChartColumn />
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Descargar Reporte
                                        <DropdownMenuShortcut>
                                            <FileText />
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ItemActions>
                    </Item>
                ))}
            </div>
        </div>
    </AppLayout>
  )
}
