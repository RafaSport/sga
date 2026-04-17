const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

async function main() {
  // criar abrigo
  const abrigo = await prisma.abrigo.create({
    data: {
      nome: "Abrigo Central",
      perfil: "GERAL",
      endereco: "Rua Exemplo",
      telefone: "999999999",
      capacidade: 50,
      status: "ATIVO"
    }
  })

  // criar usuário
  const senhaHash = await bcrypt.hash("123456", 10)

  await prisma.funcionario.create({
    data: {
      nome: "Admin",
      matricula: "001",
      cargo: "Gerente",
      perfil: "GERENTE",
      email: "admin@sga.com",
      senha: senhaHash,
      contato: "999999999",
      empresa: "Prefeitura",
      status: "ATIVO",
      abrigoId: abrigo.id
    }
  })

  console.log("✅ Usuário criado com sucesso!")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())