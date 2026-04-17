# Sistema de Gestão de Abrigos

Rede de Acolhimento — Prefeitura do Recife

## Etapa 5 — Fluxos e Processos

### 1. Introdução

Descrição dos processos principais do SGA, detalhando passo a passo como cada fluxo funciona.

### 2. Fluxo 1 — Entrada de Novo Acolhido

- Pessoa chega ao abrigo (rua ou encaminhamento)
- Verificação de cadastro existente
- Criação de novo cadastro ou nova passagem
- Registro da Escuta Inicial
- Digitalização de documentos pessoais
- Inclusão na listagem ativa

**Regras:** vaga disponível obrigatória, escuta inicial no mesmo dia, documentos podem ficar pendentes.

### 3. Fluxo 2 — Entrada por Transferência

- Gerente de destino recebe alerta
- Visualiza prontuário completo
- Autoriza chegada
- Sistema vincula acolhido ao novo abrigo
- Nova passagem iniciada

**Regras:** vaga disponível obrigatória, prontuário acessível imediatamente, transferência só conclui após dupla autorização.

### 4. Fluxo 3 — Acompanhamento Durante a Estadia

- **Documentos técnicos:** criados por técnicos, bloqueados após salvar, errata pelo autor
- **Medicações:** técnico registra prescrição, administrativo gera separação semanal
- **Agendamentos:** administrativo cadastra, alerta no login, técnico cria relatório de retorno
- **Ocorrências:** educador/cuidador registra intercorrências

### 5. Fluxo 4 — Transferência de Acolhido

- Técnico cria documento de transferência
- Gerente de origem autoriza saída
- Gerente de destino autoriza chegada ou recusa
- Sistema encerra passagem no abrigo de origem e inicia no destino

### 6. Fluxo 5 — Desligamento de Acolhido

- Técnico cria documento de desligamento
- Gerente autoriza
- Sistema encerra passagem
- Acolhido sai da listagem ativa
- Prontuário permanece acessível com status desligado

### 7. Fluxo 6 — Cadastro e Transferência de Funcionário

- **Cadastro:** gerente cria novo colaborador com dados completos
- **Transferência:** gerente origem inicia, gerente destino autoriza, coordenação visualiza
- **Desligamento:** gerente desativa funcionário, acesso revogado, histórico preservado

### 8. Resumo dos Fluxos

| Fluxo                        | Quem inicia                   | Quem autoriza            | Quem é notificado |
| ---------------------------- | ----------------------------- | ------------------------ | ----------------- |
| Entrada novo acolhido        | Técnico/Gerente               | —                        | Administrativo    |
| Entrada por transferência    | Sistema                       | Gerente destino          | Gerente destino   |
| Acompanhamento               | Técnico/Adm/Educador/Cuidador | —                        | Administrativo    |
| Transferência de acolhido    | Técnico                       | Gerente origem + destino | Gerente destino   |
| Desligamento de acolhido     | Técnico                       | Gerente                  | —                 |
| Cadastro de funcionário      | Gerente                       | —                        | Funcionário       |
| Transferência de funcionário | Gerente origem                | Gerente destino          | Coordenação       |
| Desligamento de funcionário  | Gerente                       | —                        | —                 |
