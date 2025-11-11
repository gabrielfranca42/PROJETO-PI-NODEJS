// DTO: EnderecoDto (generated from Java DTO)
class EnderecoDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.rua = obj.rua !== undefined ? obj.rua : null;
    this.numero = obj.numero !== undefined ? obj.numero : null;
    this.complemento = obj.complemento !== undefined ? obj.complemento : null;
    this.bairro = obj.bairro !== undefined ? obj.bairro : null;
    this.cidade = obj.cidade !== undefined ? obj.cidade : null;
    this.estado = obj.estado !== undefined ? obj.estado : null;
    this.cep = obj.cep !== undefined ? obj.cep : null;
    this.pontoReferencia = obj.pontoReferencia !== undefined ? obj.pontoReferencia : null;
    this.municipioId = obj.municipioId !== undefined ? obj.municipioId : null;
    this.fornecedorId = obj.fornecedorId !== undefined ? obj.fornecedorId : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['rua'] = this.rua;
    out['numero'] = this.numero;
    out['complemento'] = this.complemento;
    out['bairro'] = this.bairro;
    out['cidade'] = this.cidade;
    out['estado'] = this.estado;
    out['cep'] = this.cep;
    out['pontoReferencia'] = this.pontoReferencia;
    out['municipioId'] = this.municipioId;
    out['fornecedorId'] = this.fornecedorId;
    return out;
  }
}

module.exports = EnderecoDto;
