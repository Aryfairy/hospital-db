// -------------------- Médicos --------------------
db.medicos.insertMany([
  {
    nome: "Dr. Gabriel Souza",
    data_nascimento: ISODate("1975-05-10"),
    especialidades: ["Clínica Geral"],
    tipo: "Generalista",
    contato: { telefone: "11990001111", email: "gabriel@hospital.com" },
    documentos: { CPF: "12345678900", RG: "1234567" },
    em_atividade: true
  },
  {
    nome: "Dra. Ana Beatriz Lima",
    data_nascimento: ISODate("1982-08-15"),
    especialidades: ["Pediatria"],
    tipo: "Especialista",
    contato: { telefone: "11998887766", email: "ana@hospital.com" },
    documentos: { CPF: "23456789012", RG: "2345678" },
    em_atividade: true
  },
  {
    nome: "Dr. João Pereira",
    data_nascimento: ISODate("1985-11-25"),
    especialidades: ["Dermatologia"],
    tipo: "Especialista",
    contato: { telefone: "11997776655", email: "joao@hospital.com" },
    documentos: { CPF: "34567890123", RG: "3456789" },
    em_atividade: true
  },
  {
    nome: "Dra. Marina Silva",
    data_nascimento: ISODate("1990-03-30"),
    especialidades: ["Gastroenterologia"],
    tipo: "Especialista",
    contato: { telefone: "11996665544", email: "marina@hospital.com" },
    documentos: { CPF: "45678901234", RG: "4567890" },
    em_atividade: true
  },
  {
    nome: "Dr. Bruno Lima",
    data_nascimento: ISODate("1987-12-20"),
    especialidades: ["Pediatria", "Clínica Geral"],
    tipo: "Residente",
    contato: { telefone: "11995554433", email: "bruno@hospital.com" },
    documentos: { CPF: "56789012345", RG: "5678901" },
    em_atividade: true
  },
  {
    nome: "Dra. Sofia Martins",
    data_nascimento: ISODate("1978-04-12"),
    especialidades: ["Dermatologia", "Gastroenterologia"],
    tipo: "Especialista",
    contato: { telefone: "11994443322", email: "sofia@hospital.com" },
    documentos: { CPF: "67890123456", RG: "6789012" },
    em_atividade: true
  },
  {
    nome: "Dr. Felipe Costa",
    data_nascimento: ISODate("1983-06-18"),
    especialidades: ["Clínica Geral"],
    tipo: "Generalista",
    contato: { telefone: "11993332211", email: "felipe@hospital.com" },
    documentos: { CPF: "78901234567", RG: "7890123" },
    em_atividade: true
  },
  {
    nome: "Dra. Carla Nunes",
    data_nascimento: ISODate("1992-09-05"),
    especialidades: ["Pediatria"],
    tipo: "Residente",
    contato: { telefone: "11992221100", email: "carla@hospital.com" },
    documentos: { CPF: "89012345678", RG: "8901234" },
    em_atividade: true
  },
  {
    nome: "Dr. Rafael Mendes",
    data_nascimento: ISODate("1979-02-22"),
    especialidades: ["Gastroenterologia"],
    tipo: "Especialista",
    contato: { telefone: "11991110099", email: "rafael@hospital.com" },
    documentos: { CPF: "90123456789", RG: "9012345" },
    em_atividade: true
  },
  {
    nome: "Dra. Luana Farias",
    data_nascimento: ISODate("1981-07-14"),
    especialidades: ["Dermatologia"],
    tipo: "Especialista",
    contato: { telefone: "11998887755", email: "luana@hospital.com" },
    documentos: { CPF: "01234567890", RG: "0123456" },
    em_atividade: true
  },
  {
    nome: "Dr. Henrique Ramos",
    data_nascimento: ISODate("1984-01-08"),
    especialidades: ["Clínica Geral", "Gastroenterologia"],
    tipo: "Generalista",
    contato: { telefone: "11997776644", email: "henrique@hospital.com" },
    documentos: { CPF: "11223344556", RG: "1122334" },
    em_atividade: true
  },
  {
    nome: "Dra. Patrícia Gomes",
    data_nascimento: ISODate("1989-10-27"),
    especialidades: ["Pediatria"],
    tipo: "Residente",
    contato: { telefone: "11996665533", email: "patricia@hospital.com" },
    documentos: { CPF: "22334455667", RG: "2233445" },
    em_atividade: true
  }
]);

// -------------------- Convênios --------------------
db.convenios.insertMany([
  { nome: "Saúde Total", cnpj: "11222333000101", carencia: "30 dias" },
  { nome: "Vida Melhor", cnpj: "22333444000102", carencia: "45 dias" },
  { nome: "Plano Bem", cnpj: "33444555000103", carencia: "60 dias" }
]);

// -------------------- Pacientes --------------------
db.pacientes.insertMany([
  { nome: "Amanda Costa", data_nascimento: ISODate("1998-05-12"), endereco: "Rua A, 100", telefone: "11912345678", email: "amanda@email.com", documentos: { CPF: "12312312300", RG: "1212121" }, convenio_id: ObjectId() },
  { nome: "Lucas Ferreira", data_nascimento: ISODate("2001-07-22"), endereco: "Rua B, 200", telefone: "11923456789", email: "lucas@email.com", documentos: { CPF: "23423423400", RG: "2323232" }, convenio_id: ObjectId() },
  // (Adicione mais 13 pacientes)
]);

// -------------------- Quartos --------------------
db.quartos.insertMany([
  { numero: 101, tipo: "Apartamento", valor_diaria: 500.00 },
  { numero: 202, tipo: "Duplo", valor_diaria: 300.00 },
  { numero: 303, tipo: "Enfermaria", valor_diaria: 150.00 }
]);

// -------------------- Enfermeiros --------------------
db.enfermeiros.insertMany([
  { nome: "José Silva", cpf: "32132132100", coren: "COREN123" },
  { nome: "Mariana Dias", cpf: "43243243200", coren: "COREN234" },
  // (Adicione mais 8 enfermeiros)
]);

// -------------------- Consultas --------------------
// (Aqui você adiciona 20 consultas variando médicos, pacientes, datas, valores, convênios e receituários com 2 ou mais medicamentos em pelo menos 10 delas.)

// -------------------- Internações --------------------
// (Registre 7 internações relacionando pacientes, médicos, quartos e enfermeiros. Pelo menos dois pacientes com mais de uma internação.)
