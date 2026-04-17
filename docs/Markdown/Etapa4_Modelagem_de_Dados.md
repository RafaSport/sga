# Sistema de Gestão de Abrigos

Rede de Acolhimento — Prefeitura do Recife

## Etapa 4 — Modelagem de Dados

### 1. Introdução

Entidades e relacionamentos do sistema.

### 2. Entidades

- **Abrigo:** nome, perfil, endereço, capacidade, status
- **Funcionário:** nome, matrícula, cargo, perfil, e-mail, abrigo atual, status
- **Acolhido:** nome, nascimento, gênero, filiação, contatos, abrigo atual, status
- **Passagem:** acolhido, abrigo, entrada, saída, motivo
- **Documento:** tipo, título, conteúdo, autor, status, errata
- **Arquivo Digitalizado:** tipo, descrição, arquivo, enviado por
- **Prescrição:** medicamento, esquema manhã/tarde/noite, tipo de uso, datas
- **Separação Semanal:** período, abrigo, gerado por
- **Item da Separação:** acolhido, prescrição, quantidade
- **Agendamento:** tipo, data, horário, local, status, relatório de retorno
- **Transferência de Acolhido:** origem, destino, autorizações
- **Transferência de Funcionário:** origem, destino, autorizações
- **Modelo de Documento Instrumental:** nome, conteúdo, status

### 3. Relacionamentos

- Abrigo → Funcionários
- Abrigo → Acolhidos
- Acolhido → Passagens, Documentos, Arquivos, Prescrições, Agendamentos
- Prescrição → Itens de Separação
- Agendamento → Documento
- Documento → Errata
