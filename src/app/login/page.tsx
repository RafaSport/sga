'use client';

import { Lock, Mail, User } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

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
            <Card>
                <div className="flex justify-center mb-4">
                    <img
                        src="/images/logo_recife.jpg"
                        alt="Prefeitura do Recife"
                        className="h-16 object-contain"
                    />
                </div>

                <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
                    Sistema de Gestão de Abrigos
                </h1>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={<Mail size={18} />}
                    />

                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        icon={<Lock size={18} />}
                    />

                    <Button
                        type="submit"
                        loading={loading}
                        icon={<User size={20} />}
                    >
                        Entrar
                    </Button>
                </form>
            </Card>
        </div>
    );
}
