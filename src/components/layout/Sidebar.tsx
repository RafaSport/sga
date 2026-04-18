'use client';

import { FileText, LayoutDashboard, UserCog, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/*
========================================================
SIDEBAR DO SISTEMA

Responsável pela navegação principal.

REGRAS:
- Destacar rota ativa
- Manter consistência visual
- Ser escalável (novos módulos)

========================================================
*/

// ==========================
// CONFIGURAÇÃO DO MENU
// ==========================
const menuItems = [
    {
        label: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
    },
    {
        label: 'Acolhidos',
        href: '/acolhidos',
        icon: Users,
    },
    {
        label: 'Relatórios',
        href: '/relatorios',
        icon: FileText,
    },
    {
        label: 'Equipe',
        href: '/equipe',
        icon: UserCog,
    },
];

export default function Sidebar() {
    // Hook do Next para saber a rota atual
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
            {/* ==========================
               LOGO
            ========================== */}
            <div className="p-4 border-b border-blue-800 flex items-center gap-2">
                <img
                    src="/images/logo_recife.jpg"
                    alt="Prefeitura"
                    className="h-10"
                />
                <span className="font-bold text-sm">SGA</span>
            </div>

            {/* ==========================
               MENU
            ========================== */}
            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    // verifica se é a rota ativa
                    const isActive = pathname === item.href;

                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                flex items-center gap-3 p-2 rounded-lg transition
                                
                                ${
                                    isActive
                                        ? 'bg-blue-700 font-semibold'
                                        : 'hover:bg-blue-800 text-blue-100'
                                }
                            `}
                        >
                            <Icon size={18} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
