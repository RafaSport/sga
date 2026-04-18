import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            nome: string;
            email: string;
            perfil: string;
            abrigoId: string;
        };
    }

    interface User {
        id: string;
        nome: string;
        email: string;
        perfil: string;
        abrigoId: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        perfil: string;
        abrigoId: string;
    }
}
