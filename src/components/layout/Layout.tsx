'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

/*
========================================================
LAYOUT PRINCIPAL

Controla:
✔ sidebar aberta/fechada (mobile)
✔ estrutura geral do sistema
========================================================
*/

export default function Layout({ children }: { children: React.ReactNode }) {
    // estado da sidebar (mobile)
    const [open, setOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen} />

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col">
                <Header setOpen={setOpen} />

                <main className="p-4 md:p-6 bg-gray-100 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
