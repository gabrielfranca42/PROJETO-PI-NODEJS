// DTO: UsuarioDto (generated from Java DTO)
class UsuarioDto {
  constructor(obj = {}) {
    this.id = obj.id !== undefined ? obj.id : null;
    this.username = obj.username !== undefined ? obj.username : null;
    this.password = obj.password !== undefined ? obj.password : null;
  }
  toPlain() {
    const out = {};
    out['id'] = this.id;
    out['username'] = this.username;
    out['password'] = this.password;
    return out;
  }
}

module.exports = UsuarioDto;
