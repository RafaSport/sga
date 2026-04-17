'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h2 className="font-semibold text-gray-700">
                Sistema de Gestão de Abrigos
            </h2>

            <div className="flex items-center gap-4">
                {/* Info do usuário */}
                <div className="text-right">
                    <p className="font-medium text-sm">
                        {session?.user?.name || session?.user?.nome}
                    </p>
                    <p className="text-xs text-gray-500">
                        {session?.user?.perfil}
                    </p>
                </div>

                {/* Botão sair */}
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                    Sair
                </button>
            </div>
        </header>
    );
}
