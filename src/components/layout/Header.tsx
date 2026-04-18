'use client';

import Button from '@/components/ui/Button';
import { LogOut, Menu } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

/*
========================================================
HEADER

✔ mostra usuário
✔ botão logout
✔ botão hambúrguer (mobile)
========================================================
*/

export default function Header({ setOpen }: any) {
    const { data: session } = useSession();

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
                {/* Botão hambúrguer (só mobile) */}
                <button onClick={() => setOpen(true)} className="md:hidden">
                    <Menu size={22} />
                </button>

                <h1 className="font-semibold text-gray-700 text-sm md:text-base truncate">
                    Sistema de Gestão de Abrigos
                </h1>
            </div>

            {/* DIREITA */}
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium">{session?.user?.nome}</p>
                    <p className="text-xs text-gray-500">
                        {session?.user?.email}
                    </p>
                </div>

                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    icon={<LogOut size={16} />}
                />
            </div>
        </header>
    );
}
