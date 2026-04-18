import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'danger' | 'ghost';
    size?: 'sm' | 'md';
    type?: 'button' | 'submit';
    onClick?: () => void;
    loading?: boolean;
    icon?: ReactNode;
}

/*
========================================================
BOTÃO PADRÃO DO SISTEMA (DESIGN SYSTEM)

- Centraliza estilos de botão
- Evita repetição de classes
- Permite padronização visual

VARIANTES:
- primary → ação principal (azul)
- danger → ação destrutiva (vermelho)
- ghost → botão neutro (sem fundo)

TAMANHOS:
- sm → usado em header, tabelas
- md → usado em formulários

========================================================
*/

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    onClick,
    loading = false,
    icon,
}: ButtonProps) {
    // ==========================
    // VARIANTES DE COR
    // ==========================
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    };

    // ==========================
    // TAMANHOS
    // ==========================
    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading}
            className={`
                flex items-center justify-center gap-2
                rounded-lg font-medium transition
                ${variants[variant]}
                ${sizes[size]}
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {/* Ícone opcional */}
            {icon && <span>{icon}</span>}

            {/* Texto do botão */}
            {loading ? 'Carregando...' : children}
        </button>
    );
}
