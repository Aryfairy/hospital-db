// 1. Dados e valor médio das consultas de 2020 sob convênio
db.consultas.aggregate([
  { $match: { data: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") }, convenio_nome: { $ne: null } } },
  { $group: { _id: null, media: { $avg: "$valor" }, total: { $sum: "$valor" } } }
]);

// 2. Internações com data de alta maior que a prevista
db.internacoes.find({ $expr: { $gt: ["$data_efetiva_alta", "$data_prev_alta"] } });

// 3. Receituário da primeira consulta com receita
const consultaId = db.receituarios.findOne().consulta_id;
db.receituarios.find({ consulta_id: consultaId });

// 4. Consulta de maior e menor valor (sem convênio)
db.consultas.find({ convenio_nome: null }).sort({ valor: -1 }).limit(1);
db.consultas.find({ convenio_nome: null }).sort({ valor: 1 }).limit(1);

// 5. Internações, quartos e total
db.internacoes.aggregate([
  {
    $lookup: {
      from: "quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $addFields: {
      dias: {
        $dateDiff: {
          startDate: "$data_entrada",
          endDate: "$data_efetiva_alta",
          unit: "day"
        }
      }
    }
  },
  {
    $project: {
      procedimentos: 1,
      "quarto.numero": 1,
      total_internacao: { $multiply: ["$dias", { $arrayElemAt: ["$quarto.valor_diaria", 0] }] }
    }
  }
]);

// 6. Internações em apartamento
db.internacoes.aggregate([
  {
    $lookup: {
      from: "quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  { $match: { "quarto.tipo": "apartamento" } },
  { $project: { data_entrada: 1, procedimentos: 1, "quarto.numero": 1 } }
]);

// 7. Consultas de menores de 18 anos (não pediatria)
db.consultas.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  {
    $addFields: {
      idade: {
        $dateDiff: {
          startDate: { $arrayElemAt: ["$paciente.data_nascimento", 0] },
          endDate: "$data",
          unit: "year"
        }
      }
    }
  },
  {
    $match: {
      idade: { $lt: 18 },
      especialidade: { $ne: "Pediatria" }
    }
  },
  {
    $project: {
      "paciente.nome": 1,
      data: 1,
      especialidade: 1
    }
  },
  { $sort: { data: 1 } }
]);

// 8. Internações em enfermaria por médicos de gastroenterologia
db.internacoes.aggregate([
  {
    $lookup: {
      from: "medicos",
      localField: "medico_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  {
    $lookup: {
      from: "quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $match: {
      "medico.especialidades": "Gastroenterologia",
      "quarto.tipo": "enfermaria"
    }
  },
  {
    $project: {
      "medico.nome": 1,
      data_entrada: 1,
      procedimentos: 1,
      "quarto.numero": 1
    }
  }
]);

// 9. Médicos e quantidade de consultas
db.consultas.aggregate([
  {
    $group: {
      _id: "$medico_id",
      quantidade_consultas: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "medicos",
      localField: "_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  {
    $project: {
      "medico.nome": 1,
      "medico.documentos.CRM": 1,
      quantidade_consultas: 1
    }
  }
]);

// 10. Médicos com "Gabriel" no nome
db.medicos.find({ nome: /Gabriel/ });

// 11. Enfermeiros com mais de uma internação
db.enfermeiro_internacao.aggregate([
  {
    $group: {
      _id: "$enfermeiro_id",
      total_internacoes: { $sum: 1 }
    }
  },
  { $match: { total_internacoes: { $gt: 1 } } },
  {
    $lookup: {
      from: "enfermeiros",
      localField: "_id",
      foreignField: "_id",
      as: "enfermeiro"
    }
  },
  {
    $project: {
      "enfermeiro.nome": 1,
      "enfermeiro.COREN": 1,
      total_internacoes: 1
    }
  }
]);
