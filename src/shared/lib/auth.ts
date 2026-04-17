import bcrypt from 'bcrypt';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './prisma';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credenciais',

            credentials: {
                email: {},
                senha: {},
            },

            async authorize(credentials: any) {
                // validação básica
                if (!credentials?.email || !credentials?.senha) {
                    return null;
                }

                const usuario = await prisma.funcionario.findUnique({
                    where: { email: credentials.email },
                });

                // usuário não encontrado
                if (!usuario) {
                    return null;
                }

                // segurança extra
                if (!usuario.senha) {
                    return null;
                }

                // compara senha com hash
                const senhaValida = await bcrypt.compare(
                    credentials.senha,
                    usuario.senha
                );

                if (!senhaValida) {
                    return null;
                }

                // retorno vai para o token/session
                return {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    perfil: usuario.perfil,
                    abrigoId: usuario.abrigoId,
                };
            },
        }),
    ],

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
                token.perfil = user.perfil;
                token.abrigoId = user.abrigoId;
            }
            return token;
        },

        async session({ session, token }: any) {
            session.user.id = token.id;
            session.user.perfil = token.perfil;
            session.user.abrigoId = token.abrigoId;
            return session;
        },
    },

    pages: {
        signIn: '/login',
    },
};
