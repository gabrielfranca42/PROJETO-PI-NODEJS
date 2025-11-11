// DTO: ArmazemDto (generated from Java DTO)
class ArmazemDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.nome = obj.nome !== undefined ? obj.nome : null;
    this.cnpj = obj.cnpj !== undefined ? obj.cnpj : null;
    this.capacidade = obj.capacidade !== undefined ? obj.capacidade : null;
    this.enderecoId = obj.enderecoId !== undefined ? obj.enderecoId : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['nome'] = this.nome;
    out['cnpj'] = this.cnpj;
    out['capacidade'] = this.capacidade;
    out['enderecoId'] = this.enderecoId;
    return out;
  }
}

module.exports = ArmazemDto;
