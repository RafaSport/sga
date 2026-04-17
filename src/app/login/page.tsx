'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e: any) {
        e.preventDefault();

        await signIn('credentials', {
            email,
            senha,
            callbackUrl: '/',
        });
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
