// Service generated from EstoqueControleService.java
const db = require('../models');
const NotFoundError = require('../utils/NotFoundError');

const Model = db.EstoqueControleModel;

const EstoqueControleDto = require('../dtos/EstoqueControleDto');

class EstoqueControleService {
  // model -> dto
  modelParaDto(model) {
    if (!model) return null;
    // Sequelize instance: use dataValues
    const data = model.dataValues ? model.dataValues : model;
    return new EstoqueControleDto(data).toPlain();
  }

  // dto -> model (plain object ready for Sequelize.create/update)
  dtoParaModel(dto) {
    if (!dto) return {};
    return { ...dto };
  }

  async getAll() {
    const models = await Model.findAll();
    return models.map(m => this.modelParaDto(m));
  }

  async getById(id) {
    const model = await Model.findByPk(id);
    if (!model) return null;
    return this.modelParaDto(model);
  }

  async create(dto) {
    const plain = this.dtoParaModel(dto);
    const saved = await Model.create(plain);
    return this.modelParaDto(saved);
  }

  async update(id, dto) {
    const existente = await Model.findByPk(id);
    if (!existente) throw new NotFoundError(`${id} not found`);
    const camposValidos = {};
    for (const [k,v] of Object.entries(dto || {})) { if (v !== undefined && v !== null) camposValidos[k]=v; }
    await existente.update(camposValidos);
    return this.modelParaDto(existente);
  }

  async delete(id) {
    const existente = await Model.findByPk(id);
    if (!existente) throw new NotFoundError(`${id} not found`);
    await existente.destroy();
  }
}

module.exports = new EstoqueControleService();
