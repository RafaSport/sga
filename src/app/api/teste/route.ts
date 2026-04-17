import { prisma } from "@/shared/lib/prisma"

// Essa rota é só para testar conexão com o banco

export async function GET() {
  try {
    const abrigos = await prisma.abrigo.findMany()

    return Response.json(abrigos)
  } catch (erro) {
    console.error(erro)

    return Response.json(
      { erro: "Erro ao conectar com banco" },
      { status: 500 }
    )
  }
}