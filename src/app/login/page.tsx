'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: any) {
        e.preventDefault();
        setLoading(true);

        await signIn('credentials', {
            email,
            senha,
            callbackUrl: '/',
        });

        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/images/logo_recife.jpg"
                        alt="Prefeitura do Recife"
                        className="h-16 object-contain"
                    />
                </div>

                {/* Título */}
                <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
                    Sistema de Gestão de Abrigos
                </h1>

                {/* Formulário */}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Senha */}
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}