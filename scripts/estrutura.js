use hospital;

// Médicos
db.createCollection("medicos");

// Pacientes
db.createCollection("pacientes");

// Convênios
db.createCollection("convenios");

// Consultas
db.createCollection("consultas");

// Receituários
db.createCollection("receituarios");

// Quartos
db.createCollection("quartos");

// Internações
db.createCollection("internacoes");

// Enfermeiros
db.createCollection("enfermeiros");

// Relacionamento Enfermeiro x Internação
db.createCollection("enfermeiro_internacao");
