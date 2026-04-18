'use client';

import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import { Pencil, Plus, Trash } from 'lucide-react';

/*
========================================================
TELA DE ACOLHIDOS

Primeira versão:
- dados mockados
- foco no visual e estrutura

Depois vamos ligar com o banco
========================================================
*/

// ==========================
// DADOS MOCK (TEMPORÁRIO)
// ==========================
const acolhidos = [
    {
        nome: 'João Silva',
        idade: 34,
        status: 'Ativo',
    },
    {
        nome: 'Maria Souza',
        idade: 28,
        status: 'Inativo',
    },
];

export default function AcolhidosPage() {
    const columns = [
        { label: 'Nome', key: 'nome' },
        { label: 'Idade', key: 'idade' },
        { label: 'Status', key: 'status' },
        { label: 'Ações', key: 'acoes' },
    ];

    // ==========================
    // ADICIONAR AÇÕES NA TABELA
    // ==========================
    const data = acolhidos.map((item) => ({
        ...item,

        acoes: (
            <div className="flex gap-2">
                <Button
                    size="sm"
                    variant="ghost"
                    icon={<Pencil size={16} />}
                ></Button>

                <Button
                    size="sm"
                    variant="danger"
                    icon={<Trash size={16} />}
                ></Button>
            </div>
        ),
    }));

    return (
        <div>
            {/* HEADER DA PÁGINA */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Acolhidos</h2>

                <Button icon={<Plus size={18} />}>Novo Acolhido</Button>
            </div>

            {/* TABELA */}
            <Table columns={columns} data={data} />
        </div>
    );
}
