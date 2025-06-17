// Adicionando campo "em_atividade" a todos os médicos
db.medicos.updateMany({}, { $set: { em_atividade: true } });

// Atualizando dois médicos como inativos
db.medicos.updateOne({ nome: "Gabriel Souza" }, { $set: { em_atividade: false } });
db.medicos.updateOne({ nome: "Ana Lima" }, { $set: { em_atividade: false } });
