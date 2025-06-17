# Projeto Banco de Dados — Hospital Fundamental (MongoDB)

## Descrição
Este projeto simula um banco de dados para um hospital. Ele permite controlar consultas, médicos, pacientes, internações, convênios, receitas e enfermaria. Foi desenvolvido utilizando MongoDB, estruturado em coleções que refletem as entidades reais de um ambiente hospitalar.

---

## Objetivos
- Organizar e armazenar dados clínicos do hospital.
- Evitar o uso de planilhas e arquivos manuais.
- Permitir o gerenciamento eficiente de médicos, pacientes, consultas, internações, receitas e enfermeiros.

---

##  Modelagem do Banco
### Entidades:
- Médicos
- Pacientes
- Consultas
- Receituários
- Convênios
- Internações
- Quartos
- Enfermeiros
- Relacionamento Enfermeiros x Internações

---
## Diagramas
- MER: Representação das entidades e relacionamentos.
- Fluxograma: Sequência dos processos no hospital.

---

## Scripts
- **estrutura.js:** Criação das coleções.
- **populamento.js:** Inserção de dados simulados.
- **atualizacoes.js:** Alterações como atualização de status de médicos.
- **consultas.js:** Consultas para análise dos dados.

---

## Como Executar
1. Acesse o MongoDB Compass ou outro cliente MongoDB.
2. Selecione/crie o banco de dados `hospitaldb`.
3. Execute cada script na sequência:
   - estrutura.js
   - populamento.js
   - atualizacoes.js
   - consultas.js (para testar as consultas)
