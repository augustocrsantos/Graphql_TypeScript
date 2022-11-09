import {makeExecutableSchema, makeRemoteExecutableSchema} from 'graphql-tools';
import {Query} from './query';
import {Mutation} from './mutation';
import { userTypes } from './userSchema';
import {merge} from 'lodash';
import { UserResolver } from './resolver';

const resolvers = merge (
    UserResolver
);


const SchemaDefinicao = `
   type Schema {
       query:Query
       mutation: Mutation 
   }
`;

export default makeExecutableSchema ({
typeDefs:[
    SchemaDefinicao,
    Query,
    Mutation,
    userTypes
],

resolvers
});