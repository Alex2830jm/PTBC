import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import gestion from '@/routes/gestion';
import { BreadcrumbItem } from '@/types'
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { EllipsisVerticalIcon, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'

const breadcumbs: BreadcrumbItem[] = [
    {
        title: "Planteles",
        href: '/gestion/materias',
    }
];

interface listPlanteles  {
    id: number;
    num_plantel: number;
    nombre_plantel: string;
    domicilio: string;
}

export default function Planteles({planteles}: {planteles: listPlanteles[]}) {    
    const [openModal, setOpenModal] = useState(false);
    const { props } = usePage();
    const flashSucess = props.flash?.success;

    const {data, setData, post, processing, errors} = useForm({
        num_plantel: '',
        nombre_plantel: '',
        domicilio: '',
    });

    function submit(e) {
        e.preventDefault()
        post('/gestion/planteles/store', {
            onSuccess: () => setOpenModal(false),
        });
    }

    return (
        <AppLayout breadcrumbs={breadcumbs}>
            <Head title='Planteles'/>

            {flashSucess && (
                <Alert>
                    <AlertTitle>Plantel</AlertTitle>
                    <AlertDescription>{flashSucess}</AlertDescription>
                </Alert>
            )}

            <div className='flex flex-col space-y-6'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-xl font-semibold'>Listado de Planteles</h3>

                    <Button
                        variant='outline'
                        onClick={() => setOpenModal(true)}
                    >
                        Agregar Plantel
                    </Button>

                    <Dialog open={openModal} onOpenChange={setOpenModal}>
                        <DialogContent>
                            <DialogHeader>Agregar Plantel</DialogHeader>
                            <form onSubmit={submit}>
                                <div className='grid gap-4'>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='num_plantel'>Número del Plantel: </Label>
                                        <Input type='number' value={data.num_plantel} onChange={e => setData('num_plantel', e.target.value)} />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='num_plantel'>Nombre del Plantel: </Label>
                                        <Input type='text' value={data.nombre_plantel} onChange={e => setData('nombre_plantel', e.target.value)} />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='num_plantel'>Domicilio del Plantel: </Label>
                                        <Input type='text' value={data.domicilio} onChange={e => setData('domicilio', e.target.value)} />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant='outline'>Cerrar</Button>
                                    </DialogClose>
                                    <Button
                                        type='submit'
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className='size-4 animate-spin' />}
                                        {processing ? "Guardando Información": "Guardar Información"}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {planteles.map(({id, num_plantel, nombre_plantel, domicilio}) => (
                        <Card className='py-4' key={id}>
                            <CardHeader>
                                <CardTitle>Telebachillerato Comunitario No. {num_plantel}</CardTitle>
                                <CardDescription>{nombre_plantel}</CardDescription>
                                <CardAction>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant='outline'
                                                size='icon'
                                            >
                                                <EllipsisVerticalIcon/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='start'>
                                            <Link
                                                href={gestion.planteles.grupos(id)}
                                            >
                                                <DropdownMenuItem>
                                                    Ver Grupos
                                                </DropdownMenuItem>
                                            </Link>
                                            <DropdownMenuItem>
                                                Ver Docentes
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardAction>
                            </CardHeader>
                            <CardContent className='overflow-visible py-2'>
                                <img alt="plantel" className='object-cover rounded-xl' src='https://imgs.search.brave.com/do7hReAUwvTpp4HupcdIGagJhyyNEmBx6mcpdmEeYa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDAxMzM1/LzU4MDk3L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTgwOTc1OTE2/LXN0b2NrLXBob3Rv/LXNjaG9vbC1mYWNh/ZGUtZXh0ZXJpb3It/aWxsdXN0cmF0aW9u/LmpwZw' />
                                <span className='text-sm text-gray-600 dark:text-gray-100'>
                                    <b>Domicilio del plantel:</b> {domicilio}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}
