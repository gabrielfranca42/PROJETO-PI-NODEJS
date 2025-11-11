// DTO: FornecimentoDto (generated from Java DTO)
class FornecimentoDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.fornecedorId = obj.fornecedorId !== undefined ? obj.fornecedorId : null;
    this.sementeIds = obj.sementeIds !== undefined ? obj.sementeIds : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['fornecedorId'] = this.fornecedorId;
    out['sementeIds'] = this.sementeIds;
    return out;
  }
}

module.exports = FornecimentoDto;
