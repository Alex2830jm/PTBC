import MateriaController from '@/actions/App/Http/Controllers/MateriaController';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Form, Head, usePage } from '@inertiajs/react';
import { log } from 'console';
import { ListPlusIcon, LoaderCircle } from 'lucide-react';

import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Materias',
        href: 'gestion/materias'
    }
];

interface listMaterias {
    id: string,
    nombre_materia: string,
    clave_materia: string,
    docentes: [
        {
            id: number,
            titulo_profesion: Date,
        }
    ];
}
export default function Materias({materias}: {materias: listMaterias[]}) {

    const flash = usePage().props; 
    const [modalRegister, setModalRegister] = useState(false);

    console.log("Props: ", flash);
    
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Materias' />
            <Toaster />

            <div className='flex flex-col space-x-6'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-xl font-semibold'>Plan de Estudio</h3>
                    <Button 
                        variant="outline"
                        onClick={() => setModalRegister(true)}>
                        Agregar
                    </Button>   
                    <Dialog open={modalRegister} onOpenChange={setModalRegister}>
                        <DialogContent className='sm:max-w-[425px]'>
                            <DialogHeader>
                                <DialogTitle>Agrega Materia</DialogTitle>
                                <DialogDescription>
                                    Agregar una materia al plan de estudios
                                </DialogDescription>
                            </DialogHeader>
                            <Form action='/gestion/materias/store' method='POST'>
                                {({errors, processing}) => (
                                    <>
                                        <div className='grid gap-4'>
                                            <div className='grid gap-3'>
                                                <Label htmlFor='nombre_materia'>Nombre de la Materia:</Label>
                                                <Input id='nombre_materia' name='nombre_materia' />
                                            </div>
                                            <div className='grid gap-3'>
                                                <Label htmlFor='clave_materia'>Nombre de la Materia:</Label>
                                                <Input id='clave_materia' name='clave_materia' />
                                            </div>

                                            <div className='grid gap-3'>
                                                <Label htmlFor='semestre_id'>Selecciona el semestre:</Label>
                                                <Select name='semestre_id'>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='selección' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                            <SelectItem value='1'>Primer Semestre</SelectItem>
                                                            <SelectItem value='2'>Segundo Semestre</SelectItem>
                                                            <SelectItem value='3'>Tercer Semestre</SelectItem>
                                                            <SelectItem value='4'>Cuarto Semestre</SelectItem>
                                                            <SelectItem value='5'>Quinto Semestre</SelectItem>
                                                            <SelectItem value='6'>Sexto Semestre</SelectItem>
                                                    </SelectContent>
                                                </Select>
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
                                                {processing && (
                                                    <LoaderCircle className='size-4 animate-spin' />
                                                )}
                                                {processing ? "Guardando Información" : "Guardar Información"}
                                            </Button>
                                        </DialogFooter>
                                    </>
                                )}
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>

                <Accordion
                    type='single'
                    collapsible
                    className='w-full'
                    defaultValue='1'
                >
                    {materias.map((materia, i) => (
                        <AccordionItem value={materia.id} key={i}>
                            <AccordionTrigger>{materia.nombre_materia}</AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <Table>
                                    <TableCaption>Docentes Asignados a la materia {materia.nombre_materia}</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Docente</TableHead>
                                            <TableHead>Plantel</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </AppLayout>
    )
}
