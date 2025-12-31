import { Button } from '@/components/ui/button';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import AppLayout from '@/layouts/app-layout';
import gestion from '@/routes/gestion';
import { BreadcrumbItem } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gestión Escolar',
        href: 'gestion'
    }
];

export default function Index() {
    const user = usePage().props.auth.user;
    console.log(user);
    

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Gestión Escolar' />

            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                {user.role == 1 || user.role == 2 && (
                    <>
                        <Item variant='outline'>
                            <ItemContent>
                                <ItemTitle>Materias del Plan de Estudios</ItemTitle>
                                <ItemDescription>
                                    Se muestras las asignaturas que se intengran en el plan de estudios correspondiente
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Link href={gestion.materias.index()}>
                                    <Button 
                                        variant='outline'
                                        size="sm"
                                        className='cursor-pointer'
                                    >
                                        Ver
                                    </Button>
                                </Link>
                            </ItemActions>
                        </Item>
                    </>
                )}
                {user.role == 1 || user.role == 2 && (
                    <>
                        <Item variant='outline'>
                            <ItemContent>
                                <ItemTitle>Gestión de Ciclo Escolar</ItemTitle>
                                <ItemDescription>
                                    Se muestras las asignaturas que se intengran en el plan de estudios correspondiente
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Link href={gestion.cliclo_escolar()}>
                                    <Button variant='outline' size="sm">
                                        Ver
                                    </Button>
                                </Link>
                            </ItemActions>
                        </Item>
                    </>
                )}
                {user.role == 1 && (
                    <>
                        <Item variant='outline'>
                            <ItemContent>
                                <ItemTitle>Planteles</ItemTitle>
                                <ItemDescription>
                                    Se muestra el listado de planteles con los que cuenta la zona 11 de Telebachillerato Comunitario
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Link 
                                    href={gestion.planteles.index()}
                                >
                                    <Button 
                                        variant='outline' 
                                        size="sm"
                                        className='cursor-pointer'
                                    >
                                        Ver
                                    </Button>
                                </Link>
                            </ItemActions>
                        </Item>
                    </>
                )}

                {/* {user.role == 1 && (
                    <>
                        <Item variant='outline'>
                            <ItemContent>
                                <ItemTitle>Planteles</ItemTitle>
                                <ItemDescription>
                                    Se muestra el listado de planteles con los que cuenta la zona 11 de Telebachillerato Comunitario
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Link 
                                    href={gestion.planteles.index()}
                                >
                                    <Button 
                                        variant='outline' 
                                        size="sm"
                                        className='cursor-pointer'
                                    >
                                        Ver
                                    </Button>
                                </Link>
                            </ItemActions>
                        </Item>
                    </>
                )} */}
            </div>
        </AppLayout>
    )
}
