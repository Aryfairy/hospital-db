//  Selecionando o banco de dados
use hospitaldb;

//  Criando coleções
db.createCollection("medicos");
db.createCollection("pacientes");
db.createCollection("convenios");
db.createCollection("consultas");
db.createCollection("receituarios");
db.createCollection("internacoes");
db.createCollection("tipos_quartos");
db.createCollection("quartos");
db.createCollection("enfermeiros");

// Populando Especialidades e Tipos de Quarto
db.tipos_quartos.insertMany([
  { tipo: "Apartamento", valor_diaria: 500 },
  { tipo: "Quarto Duplo", valor_diaria: 350 },
  { tipo: "Enfermaria", valor_diaria: 200 }
]);

//  Convenios
db.convenios.insertMany([
  { nome: "SaudeMais", cnpj: "12.345.678/0001-01", carencia: "90 dias" },
  { nome: "VidaPlena", cnpj: "98.765.432/0001-09", carencia: "60 dias" },
  { nome: "BemEstar", cnpj: "45.678.912/0001-22", carencia: "30 dias" }
]);

//  Médicos (12 médicos com diversas especialidades)
db.medicos.insertMany([
  {
    nome: "Ana Paula Souza",
    data_nascimento: ISODate("1980-02-15"),
    especialidades: ["Pediatria", "Clínica Geral"],
    tipo: "Especialista",
    contato: { telefone: "11999990000", email: "ana.souza@hospital.com" },
    documentos: { cpf: "12345678900", rg: "11223344-5" }
  },
  {
    nome: "Carlos Mendes",
    data_nascimento: ISODate("1975-05-22"),
    especialidades: ["Gastroenterologia"],
    tipo: "Generalista",
    contato: { telefone: "11988887777", email: "carlos.mendes@hospital.com" },
    documentos: { cpf: "98765432100", rg: "55667788-9" }
  },
  {
    nome: "Juliana Lima",
    data_nascimento: ISODate("1987-03-10"),
    especialidades: ["Dermatologia"],
    tipo: "Residente",
    contato: { telefone: "11977776666", email: "juliana.lima@hospital.com" },
    documentos: { cpf: "12378945600", rg: "99887766-5" }
  },
  {
    nome: "Gabriel Silva",
    data_nascimento: ISODate("1982-07-05"),
    especialidades: ["Clínica Geral"],
    tipo: "Especialista",
    contato: { telefone: "11966665555", email: "gabriel.silva@hospital.com" },
    documentos: { cpf: "32165498700", rg: "44556677-9" }
  },
  {
    nome: "Patrícia Costa",
    data_nascimento: ISODate("1990-12-01"),
    especialidades: ["Gastroenterologia", "Clínica Geral"],
    tipo: "Especialista",
    contato: { telefone: "11955554444", email: "patricia.costa@hospital.com" },
    documentos: { cpf: "45678912300", rg: "11224433-6" }
  },
  {
    nome: "Fernando Rocha",
    data_nascimento: ISODate("1979-04-18"),
    especialidades: ["Pediatria"],
    tipo: "Residente",
    contato: { telefone: "11944443333", email: "fernando.rocha@hospital.com" },
    documentos: { cpf: "78945612300", rg: "33445566-2" }
  },
  {
    nome: "Mariana Gomes",
    data_nascimento: ISODate("1985-06-12"),
    especialidades: ["Dermatologia"],
    tipo: "Especialista",
    contato: { telefone: "11933332222", email: "mariana.gomes@hospital.com" },
    documentos: { cpf: "65498732100", rg: "55664477-3" }
  },
  {
    nome: "Rafael Oliveira",
    data_nascimento: ISODate("1983-11-23"),
    especialidades: ["Clínica Geral"],
    tipo: "Generalista",
    contato: { telefone: "11922221111", email: "rafael.oliveira@hospital.com" },
    documentos: { cpf: "14725836900", rg: "22334455-7" }
  },
  {
    nome: "Beatriz Almeida",
    data_nascimento: ISODate("1988-08-09"),
    especialidades: ["Gastroenterologia"],
    tipo: "Especialista",
    contato: { telefone: "11911110000", email: "beatriz.almeida@hospital.com" },
    documentos: { cpf: "85296374100", rg: "66778899-1" }
  },
  {
    nome: "Lucas Pereira",
    data_nascimento: ISODate("1991-09-14"),
    especialidades: ["Pediatria"],
    tipo: "Residente",
    contato: { telefone: "11900009999", email: "lucas.pereira@hospital.com" },
    documentos: { cpf: "96385274100", rg: "77889900-4" }
  },
  {
    nome: "Gabriela Fernandes",
    data_nascimento: ISODate("1986-01-29"),
    especialidades: ["Dermatologia"],
    tipo: "Especialista",
    contato: { telefone: "11912341234", email: "gabriela.fernandes@hospital.com" },
    documentos: { cpf: "15975345600", rg: "88990011-5" }
  },
  {
    nome: "Felipe Barbosa",
    data_nascimento: ISODate("1984-10-20"),
    especialidades: ["Clínica Geral"],
    tipo: "Generalista",
    contato: { telefone: "11932143214", email: "felipe.barbosa@hospital.com" },
    documentos: { cpf: "75315985200", rg: "99001122-8" }
  }
]);
//  Pacientes (15 pacientes)
db.pacientes.insertMany([
  { nome: "Amanda Torres", data_nascimento: ISODate("1990-04-12"), cpf: "11122233344", rg: "1234567-8", endereco: "Rua das Flores, 123", telefone: "11999998888", email: "amanda.torres@email.com", convenio_id: db.convenios.findOne({nome:"SaudeMais"})._id },
  { nome: "Bruno Almeida", data_nascimento: ISODate("1985-06-23"), cpf: "55566677788", rg: "7654321-0", endereco: "Av. Brasil, 456", telefone: "11988887777", email: "bruno.almeida@email.com", convenio_id: db.convenios.findOne({nome:"VidaPlena"})._id },
  { nome: "Carlos Silva", data_nascimento: ISODate("1975-01-15"), cpf: "99988877766", rg: "9876543-2", endereco: "Rua da Paz, 789", telefone: "11977776666", email: "carlos.silva@email.com", convenio_id: db.convenios.findOne({nome:"BemEstar"})._id },
  { nome: "Daniela Souza", data_nascimento: ISODate("1993-08-19"), cpf: "22233344455", rg: "4567890-1", endereco: "Av. Central, 101", telefone: "11966665555", email: "daniela.souza@email.com", convenio_id: db.convenios.findOne({nome:"SaudeMais"})._id },
  { nome: "Eduardo Costa", data_nascimento: ISODate("1982-11-30"), cpf: "44455566677", rg: "5678901-2", endereco: "Rua Verde, 202", telefone: "11955554444", email: "eduardo.costa@email.com", convenio_id: db.convenios.findOne({nome:"VidaPlena"})._id },
  { nome: "Fernanda Lima", data_nascimento: ISODate("1995-05-10"), cpf: "66677788899", rg: "6789012-3", endereco: "Av. das Nações, 303", telefone: "11944443333", email: "fernanda.lima@email.com", convenio_id: db.convenios.findOne({nome:"BemEstar"})._id },
  { nome: "Gustavo Martins", data_nascimento: ISODate("1989-09-22"), cpf: "77788899900", rg: "7890123-4", endereco: "Rua Azul, 404", telefone: "11933332222", email: "gustavo.martins@email.com", convenio_id: db.convenios.findOne({nome:"SaudeMais"})._id },
  { nome: "Helena Oliveira", data_nascimento: ISODate("1991-03-03"), cpf: "88899900011", rg: "8901234-5", endereco: "Av. das Flores, 505", telefone: "11922221111", email: "helena.oliveira@email.com", convenio_id: db.convenios.findOne({nome:"VidaPlena"})._id },
  { nome: "Igor Batista", data_nascimento: ISODate("1987-12-14"), cpf: "99900011122", rg: "9012345-6", endereco: "Rua Amarela, 606", telefone: "11911110000", email: "igor.batista@email.com", convenio_id: db.convenios.findOne({nome:"BemEstar"})._id },
  { nome: "Juliana Pereira", data_nascimento: ISODate("1994-07-25"), cpf: "00011122233", rg: "0123456-7", endereco: "Av. Verde, 707", telefone: "11900009999", email: "juliana.pereira@email.com", convenio_id: db.convenios.findOne({nome:"SaudeMais"})._id },
  { nome: "Kevin Rocha", data_nascimento: ISODate("1986-06-18"), cpf: "11122233355", rg: "1234567-9", endereco: "Rua Branca, 808", telefone: "11998765432", email: "kevin.rocha@email.com", convenio_id: db.convenios.findOne({nome:"VidaPlena"})._id },
  { nome: "Laura Fernandes", data_nascimento: ISODate("1992-02-09"), cpf: "22233344466", rg: "2345678-0", endereco: "Av. dos Ipês, 909", telefone: "11987654321", email: "laura.fernandes@email.com", convenio_id: db.convenios.findOne({nome:"BemEstar"})._id },
  { nome: "Marcelo Nunes", data_nascimento: ISODate("1984-05-27"), cpf: "33344455577", rg: "3456789-1", endereco: "Rua Vermelha, 1010", telefone: "11976543210", email: "marcelo.nunes@email.com", convenio_id: db.convenios.findOne({nome:"SaudeMais"})._id },
  { nome: "Natália Ribeiro", data_nascimento: ISODate("1996-10-05"), cpf: "44455566688", rg: "4567890-2", endereco: "Av. Lilás, 1111", telefone: "11965432109", email: "natalia.ribeiro@email.com", convenio_id: db.convenios.findOne({nome:"VidaPlena"})._id },
  { nome: "Otávio Lopes", data_nascimento: ISODate("1980-01-17"), cpf: "55566677799", rg: "5678901-3", endereco: "Rua Marrom, 1212", telefone: "11954321098", email: "otavio.lopes@email.com", convenio_id: db.convenios.findOne({nome:"BemEstar"})._id }
]);
//  Quartos
db.quartos.insertMany([
  { numero: "101", tipo: "Apartamento", status: "Disponível" },
  { numero: "102", tipo: "Apartamento", status: "Ocupado" },
  { numero: "201", tipo: "Quarto Duplo", status: "Disponível" },
  { numero: "202", tipo: "Quarto Duplo", status: "Ocupado" },
  { numero: "301", tipo: "Enfermaria", status: "Disponível" },
  { numero: "302", tipo: "Enfermaria", status: "Ocupado" }
]);

//  Enfermeiros (5 enfermeiros)
db.enfermeiros.insertMany([
  { nome: "Amanda Silva", coren: "SP123456", telefone: "11912345678", email: "amanda.silva@hospital.com" },
  { nome: "Bruno Santos", coren: "SP234567", telefone: "11987654321", email: "bruno.santos@hospital.com" },
  { nome: "Carla Oliveira", coren: "SP345678", telefone: "11911223344", email: "carla.oliveira@hospital.com" },
  { nome: "Diego Martins", coren: "SP456789", telefone: "11955667788", email: "diego.martins@hospital.com" },
  { nome: "Elaine Costa", coren: "SP567890", telefone: "11999887766", email: "elaine.costa@hospital.com" }
]);
//  Consultas (5 exemplos)
db.consultas.insertMany([
  {
    data: ISODate("2024-06-10T10:00:00Z"),
    paciente_id: db.pacientes.findOne({nome: "Amanda Torres"})._id,
    medico_id: db.medicos.findOne({nome: "Ana Paula Souza"})._id,
    especialidade: "Pediatria",
    observacoes: "Paciente com sintomas de febre e tosse."
  },
  {
    data: ISODate("2024-06-11T14:30:00Z"),
    paciente_id: db.pacientes.findOne({nome: "Bruno Almeida"})._id,
    medico_id: db.medicos.findOne({nome: "Carlos Mendes"})._id,
    especialidade: "Gastroenterologia",
    observacoes: "Queixa de dores abdominais."
  },
  {
    data: ISODate("2024-06-12T09:00:00Z"),
    paciente_id: db.pacientes.findOne({nome: "Carlos Silva"})._id,
    medico_id: db.medicos.findOne({nome: "Juliana Lima"})._id,
    especialidade: "Dermatologia",
    observacoes: "Lesões na pele há 3 semanas."
  },
  {
    data: ISODate("2024-06-13T16:00:00Z"),
    paciente_id: db.pacientes.findOne({nome: "Daniela Souza"})._id,
    medico_id: db.medicos.findOne({nome: "Gabriel Silva"})._id,
    especialidade: "Clínica Geral",
    observacoes: "Acompanhamento de hipertensão."
  },
  {
    data: ISODate("2024-06-14T11:00:00Z"),
    paciente_id: db.pacientes.findOne({nome: "Eduardo Costa"})._id,
    medico_id: db.medicos.findOne({nome: "Patrícia Costa"})._id,
    especialidade: "Gastroenterologia",
    observacoes: "Refluxo constante, avaliação necessária."
  }
]);

//  Internações (3 exemplos)
db.internacoes.insertMany([
  {
    paciente_id: db.pacientes.findOne({nome: "Fernanda Lima"})._id,
    quarto_numero: "102",
    data_entrada: ISODate("2024-06-01T08:00:00Z"),
    data_saida: ISODate("2024-06-05T14:00:00Z"),
    motivo: "Cirurgia de apendicite"
  },
  {
    paciente_id: db.pacientes.findOne({nome: "Gustavo Martins"})._id,
    quarto_numero: "202",
    data_entrada: ISODate("2024-06-07T10:00:00Z"),
    data_saida: ISODate("2024-06-10T16:00:00Z"),
    motivo: "Observação por suspeita de dengue"
  },
  {
    paciente_id: db.pacientes.findOne({nome: "Helena Oliveira"})._id,
    quarto_numero: "302",
    data_entrada: ISODate("2024-06-12T09:00:00Z"),
    data_saida: ISODate("2024-06-15T12:00:00Z"),
    motivo: "Pneumonia"
  }
]);

//  Receituários (3 exemplos)
db.receituarios.insertMany([
  {
    consulta_id: db.consultas.findOne({observacoes: /febre e tosse/})._id,
    medicamentos: ["Paracetamol 500mg", "Xarope para tosse"],
    orientacoes: "Tomar Paracetamol de 6 em 6 horas. Usar o xarope após as refeições."
  },
  {
    consulta_id: db.consultas.findOne({observacoes: /dores abdominais/})._id,
    medicamentos: ["Omeprazol 20mg", "Buscopan Composto"],
    orientacoes: "Tomar Omeprazol em jejum e Buscopan em caso de dor."
  },
  {
    consulta_id: db.consultas.findOne({observacoes: /Lesões na pele/})._id,
    medicamentos: ["Pomada dermatológica", "Antialérgico"],
    orientacoes: "Aplicar a pomada 2 vezes ao dia e tomar o antialérgico antes de dormir."
  }
]);
