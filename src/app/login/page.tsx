'use client';

import { Lock, Mail, User } from 'lucide-react';
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
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 bg-white">
                        <div className="px-3 text-gray-500">
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            className="w-full p-3 outline-none bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Senha */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 bg-white">
                        <div className="px-3 text-gray-500">
                            <Lock size={18} />
                        </div>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="w-full p-3 outline-none bg-transparent"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <User size={20} />
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}
