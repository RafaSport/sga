"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleLogin(e: any) {
    e.preventDefault()

    await signIn("credentials", {
      email,
      senha,
      callbackUrl: "/"
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-prefeitura-light">
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </div>

        <h1 className="text-2xl font-bold text-center text-prefeitura-primary mb-6">
          Sistema de Gestão de Abrigos
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-prefeitura-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-prefeitura-secondary"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="submit"
            className="bg-prefeitura-primary text-white py-2 rounded hover:bg-prefeitura-secondary transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

/*
==========================
PARA VOCÊ
==========================

Aqui começamos a aplicar UX real:

- centralização da tela
- card com sombra (visual moderno)
- paleta consistente
- foco nos inputs
- botão com hover

Isso já é padrão de sistema profissional.

Depois podemos evoluir:
- mensagens de erro
- loading no botão
- mostrar/ocultar senha
*/