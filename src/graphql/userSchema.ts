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

const userQueries = `
  user(id :ID): User 
`;

const userMutation = `
criaUsuario(inputUser: criaUsuarioInput ): User

`;

export {
    userTypes,
    userQueries,
    userMutation
};