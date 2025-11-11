// DTO: CooperativaDto (generated from Java DTO)
class CooperativaDto {
  constructor(obj = {}) {
    this.idCooperativa = obj.idCooperativa !== undefined ? obj.idCooperativa : null;
    this.razaoSocial = obj.razaoSocial !== undefined ? obj.razaoSocial : null;
    this.cnpj = obj.cnpj !== undefined ? obj.cnpj : null;
    this.telefone = obj.telefone !== undefined ? obj.telefone : null;
    this.email = obj.email !== undefined ? obj.email : null;
    this.enderecoCompleto = obj.enderecoCompleto !== undefined ? obj.enderecoCompleto : null;
    this.municipio = obj.municipio !== undefined ? obj.municipio : null;
    this.estado = obj.estado !== undefined ? obj.estado : null;
    this.tipoAtuacao = obj.tipoAtuacao !== undefined ? obj.tipoAtuacao : null;
    this.ativo = obj.ativo !== undefined ? obj.ativo : null;
    this.dataCadastro = obj.dataCadastro !== undefined ? obj.dataCadastro : null;
    this.observacoes = obj.observacoes !== undefined ? obj.observacoes : null;
  }
  toPlain() {
    const out = {};
    out['idCooperativa'] = this.idCooperativa;
    out['razaoSocial'] = this.razaoSocial;
    out['cnpj'] = this.cnpj;
    out['telefone'] = this.telefone;
    out['email'] = this.email;
    out['enderecoCompleto'] = this.enderecoCompleto;
    out['municipio'] = this.municipio;
    out['estado'] = this.estado;
    out['tipoAtuacao'] = this.tipoAtuacao;
    out['ativo'] = this.ativo;
    out['dataCadastro'] = this.dataCadastro;
    out['observacoes'] = this.observacoes;
    return out;
  }
}

module.exports = CooperativaDto;
