
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState, } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import alumno from '@/routes/alumno';
import { BreadcrumbItem } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react';
import { MoreHorizontal, UserPlus } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumnos',
        href: '/alumno'
    }
];

interface ListAlumnos {
    alumno_id: number,
    alumno: string,
    matricula: string,
    plantel_id: number,
    semestre: string,
}

export type Alumnos = {
    id: string,
    alumno: string,
    semestre: string,
}

export const columns: ColumnDef<ListAlumnos>[] = [
    {
        accessorKey: 'id',
        header: 'Id',
        cell: ({row}) => (
            <div className='capitalize'>{row.original.alumno_id}</div>
        )
    },
    {
        id: 'alumno',
        header: 'Alumno',
        cell: ({row}) => (
            <>
                <span className='font-semibold text-gray-700 dark:text-gray-200'>
                    {row.original.alumno}
                </span>
                <p className='text-sm text-gray-500 dark:text-gray-300'>{row.original.matricula}</p>
            </>
        )
    },
    {
        accessorKey: 'semestre',
        header: 'Semestre',
        cell: ({row}) => (
            <div className='capitalize'>{row.original.semestre}</div>
        )
    },
    {
        accessorKey: 'plantel_id',
        header: 'Plantel',
        cell: ({row}) => (
            <div className='capitalize'>{row.original.plantel_id}</div>
        )
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({row}) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='size-8 p-0'>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Datos</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Editar Datos
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Baja Temporal
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Baja Definitiva
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Formatos</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Reporte de Calificaciones
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Constancia de Estudios
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];

export default function ListAlumnos({alumnos}: {alumnos: ListAlumnos[]}) {
    const user = usePage().props.auth?.user;

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable<ListAlumnos>({
        data: alumnos,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    

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
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.filter(row => row.original.plantel_id === user.plantel_id).map((row) => (
                                <TableRow
                                    key={row.id}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    )
}
