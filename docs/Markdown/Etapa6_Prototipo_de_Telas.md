# Sistema de Gestão de Abrigos

Rede de Acolhimento — Prefeitura do Recife

## Etapa 6 — Protótipo de Telas

### 1. Introdução

Descrição das telas do SGA, perfis com acesso e comportamento esperado.

### 2. Stack Tecnológica

- **Front-end:** Next.js + React
- **Estilização:** Tailwind CSS
- **Back-end:** API Routes do Next.js
- **ORM:** Prisma
- **Banco de Dados:** PostgreSQL
- **Autenticação:** NextAuth.js
- **Arquitetura:** em camadas (View → Controller → Service → Repository → BD)

### 3. Layout Padrão

- Header fixo com logo, secretaria, abrigo atual e usuário logado
- Menu lateral fixo com restrições por perfil
- Área de conteúdo principal dinâmica

### 4. Telas

1. **Login:** todos os perfis, acesso com e-mail e senha
2. **Painel da Rede:** coordenação, visão consolidada dos abrigos
3. **Painel do Abrigo:** todos os perfis, resumo operacional da unidade
4. **Acolhidos:** listagem completa, busca e filtros, drawer lateral para detalhes
5. **Prontuário:** registrar e consultar documentos técnicos
6. **Medicações — Esquemas:** prescrições ativas, inclusão/alteração por técnicos e gerentes
7. **Medicações — Separação Semanal:** cálculo automático, relatório por período
8. **Agendamentos:** compromissos semanais, alerta para administrativos
9. **Documentos Técnicos:** consulta centralizada, filtros por tipo e autor
10. **Documentos Instrumentais:** emissão de modelos pré-definidos
11. **Equipe:** gestão de colaboradores (cadastro, transferência, desligamento)
12. **Transferências:** controle de acolhidos e funcionários, autorizações e histórico
13. **Relatórios:** estatísticos da rede, exportação em PDF/Excel

### 5. Estrutura de Navegação

- Submenus por hover: Prontuário (Registrar/Consultar), Medicações (Esquemas/Separação), Documentos (Técnicos/Instrumentais)

### 6. Acesso às Telas por Perfil

| Tela                     | Coord. | Gerente | Social | Psicólogo | Administ. | Educador | Cuidador |
| ------------------------ | ------ | ------- | ------ | --------- | --------- | -------- | -------- |
| Login                    | ✅     | ✅      | ✅     | ✅        | ✅        | ✅       | ✅       |
| Painel da Rede           | ✅     | ❌      | ❌     | ❌        | ❌        | ❌       | ❌       |
| Painel do Abrigo         | ✅     | ✅      | ✅     | ✅        | ✅        | ✅       | ✅       |
| Acolhidos                | ✅     | ✅      | ✅     | ✅        | Básico    | Básico   | Básico   |
| Prontuário               | Ver    | ✅      | ✅     | ✅        | ❌        | ❌       | ❌       |
| Medicações Esquemas      | ❌     | ✅      | ✅     | ✅        | Ver       | ❌       | ❌       |
| Separação Semanal        | ❌     | ✅      | ❌     | ❌        | ✅        | ❌       | ❌       |
| Agendamentos             | ❌     | ✅      | ✅     | ✅        | ✅        | ✅       | Dia      |
| Documentos Técnicos      | Ver    | ✅      | ✅     | ✅        | ❌        | ❌       | ❌       |
| Documentos Instrumentais | ❌     | ✅      | ❌     | ❌        | ✅        | ❌       | ❌       |
| Equipe                   | ❌     | ✅      | ❌     | ❌        | ❌        | ❌       | ❌       |
| Transferências           | Ver    | ✅      | ❌     | ❌        | ❌        | ❌       | ❌       |
| Relatórios               | ✅     | ❌      | ❌     | ❌        | ❌        | ❌       | ❌       |

### 7. Decisões de UX

- Drawer lateral para detalhes do acolhido
- Prontuário unificado (leitura + escrita)
- Receituários e arquivos digitalizados como abas
- Atalhos no drawer com acolhido pré-selecionado
- Dias passados esmaecidos na tela de agendamentos
- Submenus por hover no menu lateral
