"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      
      {/* Título do sistema */}
      <h1 className="text-xl font-bold mb-6">
        SGA Recife
      </h1>

      {/* Menu */}
      <nav className="flex flex-col gap-3">
        
        <Link href="/" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>

        <Link href="/acolhidos" className="hover:bg-gray-700 p-2 rounded">
          Acolhidos
        </Link>

        <Link href="/equipe" className="hover:bg-gray-700 p-2 rounded">
          Equipe
        </Link>

        <Link href="/relatorios" className="hover:bg-gray-700 p-2 rounded">
          Relatórios
        </Link>

      </nav>
    </aside>
  )
}
