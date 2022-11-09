"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
exports.UserResolver = {
    Mutation: {
        criaUsuario: (parent, args, context, info) => {
            let nome = args.input.nome;
            let email = args.input.email;
            return {
                id: "2",
                nome: 'augusto',
                email: 'email@email'
            };
        }
    }
};
//# sourceMappingURL=resolver.js.map