'use client';

import { FileText, LayoutDashboard, UserCog, Users, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/*
========================================================
SIDEBAR RESPONSIVA

✔ desktop → fixa
✔ mobile → overlay (abre/fecha)
========================================================
*/

const menuItems = [
    { label: 'Dashboard', href: '/', icon: LayoutDashboard },
    { label: 'Acolhidos', href: '/acolhidos', icon: Users },
    { label: 'Relatórios', href: '/relatorios', icon: FileText },
    { label: 'Equipe', href: '/equipe', icon: UserCog },
];

export default function Sidebar({ open, setOpen }: any) {
    const pathname = usePathname();

    return (
        <>
            {/* OVERLAY (mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed md:static z-50
                    w-64 h-screen bg-blue-900 text-white flex flex-col
                    transform transition-transform
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0
                `}
            >
                {/* HEADER SIDEBAR */}
                <div className="p-4 border-b border-blue-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo_recife.jpg" className="h-10" />
                        <span className="font-bold text-sm">SGA</span>
                    </div>

                    {/* botão fechar mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* MENU */}
                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)} // fecha no mobile
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
        </>
    );
}
