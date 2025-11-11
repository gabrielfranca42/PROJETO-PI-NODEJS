// DTO: LoteControleDto (generated from Java DTO)
class LoteControleDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.loteId = obj.loteId !== undefined ? obj.loteId : null;
    this.sementeId = obj.sementeId !== undefined ? obj.sementeId : null;
    this.fornecedorId = obj.fornecedorId !== undefined ? obj.fornecedorId : null;
    this.dataUltimaAtualizacao = obj.dataUltimaAtualizacao !== undefined ? obj.dataUltimaAtualizacao : null;
    this.dataValidade = obj.dataValidade !== undefined ? obj.dataValidade : null;
    this.status = obj.status !== undefined ? obj.status : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['loteId'] = this.loteId;
    out['sementeId'] = this.sementeId;
    out['fornecedorId'] = this.fornecedorId;
    out['dataUltimaAtualizacao'] = this.dataUltimaAtualizacao;
    out['dataValidade'] = this.dataValidade;
    out['status'] = this.status;
    return out;
  }
}

module.exports = LoteControleDto;
