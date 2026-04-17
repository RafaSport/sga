import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import bcrypt from "bcrypt"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciais",

      credentials: {
        email: {},
        senha: {}
      },

      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.senha) {
          throw new Error("Dados inválidos")
        }

        const usuario = await prisma.funcionario.findUnique({
          where: { email: credentials.email }
        })

        if (!usuario) {
          throw new Error("Usuário não encontrado")
        }

        const senhaValida = await bcrypt.compare(
          credentials.senha,
          usuario.senha
        )

        if (!senhaValida) {
          throw new Error("Senha inválida")
        }

        return {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          perfil: usuario.perfil,
          abrigoId: usuario.abrigoId
        }
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.perfil = user.perfil
        token.abrigoId = user.abrigoId
      }
      return token
    },

    async session({ session, token }: any) {
      session.user.id = token.id
      session.user.perfil = token.perfil
      session.user.abrigoId = token.abrigoId
      return session
    }
  },

  pages: {
    signIn: "/login"
  }
}