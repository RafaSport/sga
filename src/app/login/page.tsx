'use client';

// =========================
// IMPORTS
// =========================
import { Lock, LogIn, Mail } from 'lucide-react'; // Ícones
import { signIn } from 'next-auth/react'; // Autenticação
import { useState } from 'react'; // Estado React

// =========================
// COMPONENTE DE LOGIN
// =========================
export default function LoginPage() {
    // Estados para armazenar email e senha
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função de login
    async function handleLogin(e: any) {
        e.preventDefault();

        await signIn('credentials', {
            email,
            senha,
            callbackUrl: '/', // Redireciona após login
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* GRID PRINCIPAL: divide em 2 colunas no desktop */}
            <div className="grid md:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">
                {/* =========================
                    LADO ESQUERDO (IDENTIDADE SOBRE FUNDO)
                ========================== */}
                <div className="relative flex flex-col justify-start items-center p-10 text-center text-white">
                    {/* IMAGEM DE FUNDO */}
                    <img
                        src="/images/suas-recife.png"
                        alt="Prefeitura Recife"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />

                    {/* OVERLAY GRADIENTE */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-yellow-600/40" />

                    {/* CONTEÚDO INSTITUCIONAL CENTRALIZADO */}
                    <div className="relative z-10 space-y-3 mt-10">
                        <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-lg">
                            Prefeitura do Recife
                        </h1>
                        <h2 className="text-2xl font-semibold text-yellow-400">
                            Secretaria de Assistência Social
                        </h2>
                        <p className="text-base font-medium text-gray-100 max-w-md mx-auto">
                            Promovendo acolhimento, dignidade e cuidado às
                            pessoas em situação de vulnerabilidade.
                        </p>
                    </div>
                </div>

                {/* =========================
                    LADO DIREITO (LOGIN)
                ========================== */}
                <div className="flex items-start justify-center bg-white p-10">
                    <div className="w-full max-w-md space-y-6">
                        {/* LOGO DA PREFEITURA ACIMA DO TÍTULO */}
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/logo_recife.jpg"
                                alt="Logo Prefeitura"
                                className="w-20"
                            />
                        </div>

                        {/* TÍTULO DO LOGIN */}
                        <h3 className="text-2xl font-semibold text-center text-blue-700">
                            Acesso ao Sistema
                        </h3>

                        {/* FORMULÁRIO */}
                        <form onSubmit={handleLogin} className="space-y-4 mt-4">
                            {/* CAMPO EMAIL */}
                            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                                <div className="px-3 text-gray-400">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 outline-none bg-transparent"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* CAMPO SENHA */}
                            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                                <div className="px-3 text-gray-400">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    className="w-full p-3 outline-none bg-transparent"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            {/* BOTÃO DE LOGIN */}
                            <button className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 hover:scale-105 transition font-medium">
                                <LogIn size={20} />
                                Entrar
                            </button>
                        </form>

                        {/* RODAPÉ */}
                        <p className="text-xs text-gray-400 text-center">
                            © Prefeitura do Recife
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
