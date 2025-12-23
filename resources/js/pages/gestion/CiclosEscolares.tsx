import React, { useState } from 'react'
import { BreadcrumbItem } from '@/types'
import AppLayout from '@/layouts/app-layout';
import { Form, Head, Link } from '@inertiajs/react';
import { ListPlus, LoaderCircle, RefreshCcw } from 'lucide-react';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import gestion from '@/routes/gestion';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gestión de Cliclo Escolar',
        href: '/gestion'
    }
];

interface ListGrupos {
  id: number;
  semestre_id: number;
  plantel_id: number;
  nombre_grupo: string;
  activo: boolean;
}

export default function CiclosEscolares({grupos}: {grupos: ListGrupos[]}) {
  const [ modalPeriodo, setModalPeriodo ] = useState(false);
  return (
    <>
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Gestión de Ciclo Escolar' />
        <div className='flex flex-col gap-5'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>
              Gestión de Grupos por Semestre
            </h2>
            <div className='flex flex-row gap-2'>
              <Link
                className='px-2 py-2 rounded-xl border-2 border-green-200 text-center hover:bg-green-200 hover:text-black'
              >
                <ListPlus className='size-5' />
              </Link>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    onClick={() => setModalPeriodo(true)}
                    size='icon-lg'
                  >
                    <RefreshCcw className='size-5' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cambiar de Periodo Escolar</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
            {grupos.map(({id, nombre_grupo, activo}) => (
              <Item variant="outline" key={id}>
                <ItemContent>
                  <ItemTitle>{nombre_grupo}</ItemTitle>
                  <ItemDescription>
                    {activo
                      ? <span className='text-semibold text-sm'>Total de Alumnos: 15</span>
                      : 'Semestre inactivo por periodo escolar'
                    }
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="outline" size="sm">
                    Ver Alumnos
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </div>

          <Dialog open={modalPeriodo} onOpenChange={setModalPeriodo}>
            <DialogContent className='sm:max-w-sm'>
              <DialogHeader>
                <DialogTitle>
                  Periodo Escolar por Semestre
                </DialogTitle>
                <DialogDescription>                 
                  Cambiar periodo escolar
                </DialogDescription>
              </DialogHeader>
              <Form
                /* action='/gestion/update_periodo_escolar/1' */
                action={gestion.update_periodo(1)}
                method='POST'
              >
                {({processing}) => (
                  <>
                    <h2 className="mb-2 font-medium text-heading">Password requirements:</h2>
                    <ul className="max-w-md text-sm space-y-1 text-body list-disc list-inside">
                        <li>
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li>
                            At least one lowercase character
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                    </ul>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant='outline'>
                          Cancelar
                        </Button>
                      </DialogClose>
                      <Button
                        type='submit'
                        disabled={processing}
                      >
                        {processing && (
                          <LoaderCircle className='size-4 animate-spin' />
                        )}
                        { processing ? 'Cambiando Periodo' : 'Cambiar Periodo'}
                      </Button>
                    </DialogFooter>
                  </>
                )}
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </AppLayout>
    </>
  )
}
