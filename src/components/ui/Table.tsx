interface Column {
    label: string;
    key: string;
}

/*
========================================================
TABLE RESPONSIVA

✔ scroll horizontal no mobile
✔ mantém layout no desktop
✔ reutilizável

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
        <div className="bg-white rounded-xl shadow">
            {/* SCROLL MOBILE */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                    {/* HEADER */}
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="text-left p-3 whitespace-nowrap"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="p-3 whitespace-nowrap"
                                    >
                                        {item[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
