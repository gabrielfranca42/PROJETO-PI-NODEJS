// DTO: EstoqueDto (generated from Java DTO)
class EstoqueDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.armazemId = obj.armazemId !== undefined ? obj.armazemId : null;
    this.sementeId = obj.sementeId !== undefined ? obj.sementeId : null;
    this.quantidadePeso = obj.quantidadePeso !== undefined ? obj.quantidadePeso : null;
    this.quantidadeVolume = obj.quantidadeVolume !== undefined ? obj.quantidadeVolume : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['armazemId'] = this.armazemId;
    out['sementeId'] = this.sementeId;
    out['quantidadePeso'] = this.quantidadePeso;
    out['quantidadeVolume'] = this.quantidadeVolume;
    return out;
  }
}

module.exports = EstoqueDto;
