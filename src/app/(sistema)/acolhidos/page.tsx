'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import { Pencil, Plus, Trash } from 'lucide-react';

/*
========================================================
TELA DE ACOLHIDOS (VERSÃO MELHORADA)

✔ tabela responsiva
✔ status com badge
✔ ações com ícones
========================================================
*/

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
    {
        nome: 'Carlos Lima',
        idade: 41,
        status: 'Transferido',
    },
];

// ==========================
// FUNÇÃO DE COR DO STATUS
// ==========================
function getStatusVariant(status: string) {
    if (status === 'Ativo') return 'success';
    if (status === 'Inativo') return 'danger';
    return 'warning';
}

export default function AcolhidosPage() {
    const columns = [
        { label: 'Nome', key: 'nome' },
        { label: 'Idade', key: 'idade' },
        { label: 'Status', key: 'status' },
        { label: 'Ações', key: 'acoes' },
    ];

    const data = acolhidos.map((item) => ({
        ...item,

        status: (
            <Badge
                label={item.status}
                variant={getStatusVariant(item.status)}
            />
        ),

        acoes: (
            <div className="flex gap-2">
                <Button size="sm" variant="ghost" icon={<Pencil size={16} />} />

                <Button size="sm" variant="danger" icon={<Trash size={16} />} />
            </div>
        ),
    }));

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Acolhidos</h2>

                <Button icon={<Plus size={18} />}>Novo Acolhido</Button>
            </div>

            <Table columns={columns} data={data} />
        </div>
    );
}
