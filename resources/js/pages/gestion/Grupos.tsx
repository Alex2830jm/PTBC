import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react';
import { BadgeCheckIcon, EllipsisVerticalIcon } from 'lucide-react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Grupos por Plantel",
        href: '/planteles'
    }
];

interface listGrupos {
    id: number,
    semestre_id: number,
    plantel_id: number,
    nombre_grupo: number,
}
export default function Grupos({grupos}: {grupos: listGrupos[]}) {
    console.log(grupos);
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Grupos del Plantel' />

            <div className='flex flex-col space-y-6'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-xl font-semibold'>Grupos del Plantel</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    {grupos.map(({id, semestre_id, nombre_grupo}) => (
                        <>
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>{nombre_grupo}</CardTitle>
                                    <CardDescription>Grupo de Alumnos por Semestre</CardDescription>
                                    <CardAction>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Button
                                                    variant='outline'
                                                    size='icon'
                                                >
                                                    <EllipsisVerticalIcon />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align='start'>
                                                <DropdownMenuItem>
                                                    Ver Alumnos
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </CardAction>
                                </CardHeader>

                                <CardContent>
                                    <ul role='list' className='space-y-4 text-sm'>
                                        <li className='flex items-center'>
                                            <BadgeCheckIcon className='size-4 shrink-0 text-fg-brand me-1.5' />
                                            <span className='text-body'>Total de Alumnos: </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <BadgeCheckIcon className='size-4 shrink-0 text-fg-brand me-1.5' />
                                            <span className='text-body'>Promedio del Grupo: </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}
