# Sistema de Gestão de Abrigos

Rede de Acolhimento — Prefeitura do Recife

## Etapa 3 — Mapeamento de Perfis e Permissões

### 1. Introdução

Perfis de usuário e permissões seguindo o princípio do menor privilégio.

### 2. Perfis

- Coordenação da Rede
- Gerente
- Assistente Social
- Psicólogo(a)
- Assistente Administrativo
- Educador Social
- Cuidador

### 3. Matriz de Permissões

| Funcionalidade           | Coord. | Gerente | Social | Psicól. | Administ. | Educador | Cuidador |
| ------------------------ | ------ | ------- | ------ | ------- | --------- | -------- | -------- |
| Ver rede                 | ✅     | ❌      | ❌     | ❌      | ❌        | ❌       | ❌       |
| Ver abrigo               | ✅     | ✅      | ✅     | ✅      | ✅        | Simples  | Simples  |
| Cadastrar acolhido       | ❌     | ✅      | ✅     | ✅      | ❌        | ❌       | ❌       |
| Ver prontuário           | ✅     | ✅      | ✅     | ✅      | Parcial   | Parcial  | ❌       |
| Criar docs técnicos      | ❌     | ✅      | ✅     | ✅      | ❌        | ❌       | ❌       |
| Criar docs instrumentais | ❌     | ✅      | ❌     | ❌      | ✅        | ❌       | ❌       |
| Autorizar transferência  | ❌     | ✅      | ❌     | ❌      | ❌        | ❌       | ❌       |
| Relatórios estatísticos  | ✅     | ❌      | ❌     | ❌      | ❌        | ❌       | ❌       |

### 4. Fluxos

- Transferência de acolhido: técnico cria → gerente origem autoriza → gerente destino autoriza
- Transferência de funcionário: gerente origem inicia → gerente destino autoriza → coordenação visualiza

### 5. Regras Gerais

- Isolamento por abrigo
- Prontuário unificado
- Autoria registrada
- Dupla autorização
- Sigilo técnico
- Exclusão preserva histórico
