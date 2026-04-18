interface Column {
    label: string;
    key: string;
}

/*
========================================================
COMPONENTE DE TABELA PADRÃO

- Reutilizável
- Padroniza listagens
- Usado em vários módulos (acolhidos, equipe, etc)

========================================================
*/

export default function Table({
    columns,
    data,
}: {
    columns: Column[];
    data: any[];
}) {
    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
                {/* HEADER */}
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="text-left p-3">
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-t hover:bg-gray-50">
                            {columns.map((col) => (
                                <td key={col.key} className="p-3">
                                    {item[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
