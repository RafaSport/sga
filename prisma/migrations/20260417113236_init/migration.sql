-- CreateTable
CREATE TABLE "Abrigo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Abrigo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "abrigoId" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acolhido" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "naturalidade" TEXT NOT NULL,
    "filiacao" TEXT NOT NULL,
    "contatos" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "abrigoId" TEXT NOT NULL,

    CONSTRAINT "Acolhido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_abrigoId_fkey" FOREIGN KEY ("abrigoId") REFERENCES "Abrigo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acolhido" ADD CONSTRAINT "Acolhido_abrigoId_fkey" FOREIGN KEY ("abrigoId") REFERENCES "Abrigo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
