// DTO: EstoqueControleDto (generated from Java DTO)
class EstoqueControleDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.localArmazenamento = obj.localArmazenamento !== undefined ? obj.localArmazenamento : null;
    this.quantidadeAtual = obj.quantidadeAtual !== undefined ? obj.quantidadeAtual : null;
    this.dataUltimaAtualizacao = obj.dataUltimaAtualizacao !== undefined ? obj.dataUltimaAtualizacao : null;
    this.estoqueId = obj.estoqueId !== undefined ? obj.estoqueId : null;
    this.loteId = obj.loteId !== undefined ? obj.loteId : null;
    this.cooperativaId = obj.cooperativaId !== undefined ? obj.cooperativaId : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['localArmazenamento'] = this.localArmazenamento;
    out['quantidadeAtual'] = this.quantidadeAtual;
    out['dataUltimaAtualizacao'] = this.dataUltimaAtualizacao;
    out['estoqueId'] = this.estoqueId;
    out['loteId'] = this.loteId;
    out['cooperativaId'] = this.cooperativaId;
    return out;
  }
}

module.exports = EstoqueControleDto;
