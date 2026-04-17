"use client"

import { signOut } from "next-auth/react"

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      <h2 className="font-semibold">
        Sistema de Gestão de Abrigos
      </h2>

      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Sair
      </button>
    </header>
  )
}
