import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, GraduationCap, LayoutGrid, School, Settings, SpellCheck, User, Users, UsersRound } from 'lucide-react';
import AppLogo from './app-logo';
import docente from '@/routes/docente';
import alumno from '@/routes/alumno';
import gestion from '@/routes/gestion';
import calificacion from '@/routes/calificacion';

const mainNavItems = {
    1: [
        {
            title: 'Dashboard',
            href: alumno.index(),
            icon: LayoutGrid,
        },
        {
            title: 'Alumnos',
            href: alumno.index(),
            icon: Users,
        },
        {
            title: 'Docentes',
            href: docente.index(),
            icon: GraduationCap,
        }, 
        {
            title: 'Gestión Escolar',
            href: gestion.home(),
            icon: Settings
        }
    ],
    2: [
        {
            title: 'Dashboard',
            href: alumno.index(),
            icon: LayoutGrid,
        },
        {
            title: 'Alumnos',
            href: alumno.index(),
            icon: Users,
        },
        {
            title: 'Calificaciones',
            href: calificacion.list(),
            icon: SpellCheck
        },
        {
            title: 'Docentes',
            href: docente.index(),
            icon: GraduationCap,
        }, 
        {
            title: 'Grupos',
            href: alumno.index(),
            icon: School
        },
        {
            title: 'Gestión Escolar',
            href: gestion.home(),
            icon: Settings
        }
    ]
};

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const user = usePage().props.auth?.user;
    const menu = mainNavItems[user.role];
    
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={alumno.index()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={menu} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
