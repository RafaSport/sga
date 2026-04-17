import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      
      {/* Sidebar lateral */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex-1 flex flex-col">
        
        {/* Header topo */}
        <Header />

        {/* Conteúdo das páginas */}
        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>
    </div>
  )
}