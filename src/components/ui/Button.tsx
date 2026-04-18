import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    loading?: boolean;
    icon?: ReactNode;
}

export default function Button({
    children,
    onClick,
    type = 'button',
    loading = false,
    icon,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
            {icon}
            {loading ? 'Carregando...' : children}
        </button>
    );
}
