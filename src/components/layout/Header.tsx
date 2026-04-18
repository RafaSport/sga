'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h1 className="font-semibold text-gray-700">
                Sistema de Gestão de Abrigos
            </h1>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm font-medium">{session?.user?.nome}</p>
                    <p className="text-xs text-gray-500">
                        {session?.user?.email}
                    </p>
                </div>

                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Sair
                </button>
            </div>
        </header>
    );
}
