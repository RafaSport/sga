import { Providers } from '@/providers';
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt" className={inter.variable} >
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
