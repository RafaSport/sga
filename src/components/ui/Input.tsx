import { ReactNode } from 'react';

interface InputProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: any) => void;
    icon?: ReactNode;
}

export default function Input({
    type = 'text',
    placeholder,
    value,
    onChange,
    icon,
}: InputProps) {
    return (
        <div
            className="w-full p-3 outline-none bg-transparent text-sm md:text-base"
        >
            {icon && <div className="px-3 text-gray-500">{icon}</div>}

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 outline-none bg-transparent"
            />
        </div>
    );
}
