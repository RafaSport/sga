'use client';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
            </div>
        </div>
    );
}
