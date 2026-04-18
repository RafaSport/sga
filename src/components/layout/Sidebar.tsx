'use client';

import { FileText, LayoutDashboard, UserCog, Users } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
            {/* Logo */}
            <div className="p-4 border-b border-blue-800 flex items-center gap-2">
                <img src="/images/logo_recife.jpg" className="h-10" />
                <span className="font-bold text-sm">SGA</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-2">
                <Link
                    href="/"
                    className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition"
                >
                    <LayoutDashboard size={18} />
                    Dashboard
                </Link>

                <Link
                    href="/acolhidos"
                    className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition"
                >
                    <Users size={18} />
                    Acolhidos
                </Link>

                <Link
                    href="/relatorios"
                    className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition"
                >
                    <FileText size={18} />
                    Relatórios
                </Link>

                <Link
                    href="/equipe"
                    className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition"
                >
                    <UserCog size={18} />
                    Equipe
                </Link>
            </nav>
        </aside>
    );
}