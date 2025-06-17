# Projeto Hospital - MongoDB

## Descrição
Projeto de banco de dados MongoDB para controle de informações hospitalares. Inclui cadastro de médicos, pacientes, consultas, internações, receituário e controle de enfermagem.

---

## Estrutura do Projeto

- `/diagramas` → Contém o diagrama entidade-relacionamento (ERD) do projeto.
- `/modelo` → Arquivo JSON com a modelagem das coleções do MongoDB.
- `/scripts_povoamento` → Script de povoamento (inserção dos dados iniciais).
- `/scripts_atualizacao` → Script de atualizações e manutenções nos dados.
- `/scripts_consultas` → Script com consultas complexas no banco MongoDB.

---

## Tecnologias Utilizadas

- MongoDB
- MongoDB Compass
- JavaScript (para scripts Mongo)
- GitHub

## Estrutura do Repositório
- `/scripts`: Scripts de criação, povoamento, atualização e consultas.
- `/diagramas`: Diagramas de modelo de dados, entidade-relacionamento e fluxograma.
- `README.md`: Documentação do projeto.

## Modelo de Dados
O banco é organizado nas seguintes coleções:
- Médicos
- Pacientes
- Consultas
- Convênios
- Receituários
- Internações
- Quartos
- Tipos de Quarto
- Enfermeiros


## Como Executar

1. Instale o MongoDB e o MongoDB Compass.
2. Crie um banco chamado: `hospital`
3. No MongoDB Compass, clique em **“New Collection”** e cole os scripts de `estrutura.js`.
4. Cole os dados do `populamento.js`.
5. Faça as alterações do `atualizacoes.js`.
6. Execute as consultas em `consultas.js`.

---
