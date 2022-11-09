import { ArgumentsOfCorrectType } from "graphql/validation/rules/ArgumentsOfCorrectType";
import { Mutation } from "./mutation";



export const UserResolver = {

Mutation:{
    criaUsuario: (parent,args, context, info) =>{
       //let nomes: String = args.inputUser.nome;
        //let emails: String = args.inputUser.email;

        return{
            id: "2",
            nome: 'augusto',
              email: 'email@email'
        };
    }
}

};