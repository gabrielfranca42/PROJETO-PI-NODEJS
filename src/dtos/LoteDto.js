// DTO: LoteDto (generated from Java DTO)
class LoteDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.sementeId = obj.sementeId !== undefined ? obj.sementeId : null;
    this.dataEntrada = obj.dataEntrada !== undefined ? obj.dataEntrada : null;
    this.dataSaida = obj.dataSaida !== undefined ? obj.dataSaida : null;
    this.peso = obj.peso !== undefined ? obj.peso : null;
    this.metroCubico = obj.metroCubico !== undefined ? obj.metroCubico : null;
    this.identificacao = obj.identificacao !== undefined ? obj.identificacao : null;
    this.loteControleIds = obj.loteControleIds !== undefined ? obj.loteControleIds : null;
    this.estoqueControleIds = obj.estoqueControleIds !== undefined ? obj.estoqueControleIds : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['sementeId'] = this.sementeId;
    out['dataEntrada'] = this.dataEntrada;
    out['dataSaida'] = this.dataSaida;
    out['peso'] = this.peso;
    out['metroCubico'] = this.metroCubico;
    out['identificacao'] = this.identificacao;
    out['loteControleIds'] = this.loteControleIds;
    out['estoqueControleIds'] = this.estoqueControleIds;
    return out;
  }
}

module.exports = LoteDto;
