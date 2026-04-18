export default function Page() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    Total de Acolhidos: 120
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Vagas Disponíveis: 30
                </div>

                <div className="bg-white p-4 rounded shadow">
                    Transferências: 5
                </div>
            </div>
        </div>
    );
}