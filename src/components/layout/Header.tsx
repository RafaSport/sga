'use client';

import Button from '@/components/ui/Button';
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            {/* Título */}
            <h1 className="font-semibold text-gray-700">
                Sistema de Gestão de Abrigos
            </h1>

            {/* Usuário + Ações */}
            <div className="flex items-center gap-4">
                {/* Dados do usuário */}
                <div className="text-right">
                    <p className="text-sm font-medium">{session?.user?.nome}</p>
                    <p className="text-xs text-gray-500">
                        {session?.user?.email}
                    </p>
                </div>

                {/* Botão de sair usando design system */}
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => signOut()}
                    icon={<LogOut size={16} />}
                >
                    Sair
                </Button>
            </div>
        </header>
    );
}
