"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutation = exports.userQueries = exports.userTypes = void 0;
const userTypes = `
#campos do projeto 
type User {
id: ID
nome: String
email : String
}

#dados que vao ser inseridos na Mutation
input criaUsuarioInput {
    nome: String
    email: String 
}

`;
exports.userTypes = userTypes;
const userQueries = `
  user(id :ID): User 
`;
exports.userQueries = userQueries;
const userMutation = `
criaUsuario(inputUser: criaUsuarioInput ): User

`;
exports.userMutation = userMutation;
//# sourceMappingURL=userSchema.js.map