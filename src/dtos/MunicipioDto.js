// DTO: MunicipioDto (generated from Java DTO)
class MunicipioDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.nome = obj.nome !== undefined ? obj.nome : null;
    this.estado = obj.estado !== undefined ? obj.estado : null;
    this.cnpj = obj.cnpj !== undefined ? obj.cnpj : null;
    this.enderecoIds = obj.enderecoIds !== undefined ? obj.enderecoIds : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['nome'] = this.nome;
    out['estado'] = this.estado;
    out['cnpj'] = this.cnpj;
    out['enderecoIds'] = this.enderecoIds;
    return out;
  }
}

module.exports = MunicipioDto;
