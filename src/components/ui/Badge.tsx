interface BadgeProps {
    label: string;
    variant?: 'success' | 'danger' | 'warning';
}

/*
========================================================
BADGE (STATUS VISUAL)

- Representa estados do sistema
- Usado em tabelas, cards, etc

VARIANTES:
✔ success → verde
✔ danger → vermelho
✔ warning → amarelo
========================================================
*/

export default function Badge({ label, variant = 'success' }: BadgeProps) {
    const variants = {
        success: 'bg-green-100 text-green-700',
        danger: 'bg-red-100 text-red-700',
        warning: 'bg-yellow-100 text-yellow-700',
    };

    return (
        <span
            className={`
                px-2 py-1 text-xs font-medium rounded-full
                ${variants[variant]}
            `}
        >
            {label}
        </span>
    );
}
