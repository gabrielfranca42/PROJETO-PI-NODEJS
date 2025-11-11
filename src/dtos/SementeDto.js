// DTO: SementeDto (generated from Java DTO)
class SementeDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.nome = obj.nome !== undefined ? obj.nome : null;
    this.validade = obj.validade !== undefined ? obj.validade : null;
    this.especie = obj.especie !== undefined ? obj.especie : null;
    this.fornecimentoId = obj.fornecimentoId !== undefined ? obj.fornecimentoId : null;
    this.estoqueIds = obj.estoqueIds !== undefined ? obj.estoqueIds : null;
    this.loteIds = obj.loteIds !== undefined ? obj.loteIds : null;
    this.loteControleIds = obj.loteControleIds !== undefined ? obj.loteControleIds : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['nome'] = this.nome;
    out['validade'] = this.validade;
    out['especie'] = this.especie;
    out['fornecimentoId'] = this.fornecimentoId;
    out['estoqueIds'] = this.estoqueIds;
    out['loteIds'] = this.loteIds;
    out['loteControleIds'] = this.loteControleIds;
    return out;
  }
}

module.exports = SementeDto;
