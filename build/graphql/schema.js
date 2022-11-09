"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const userSchema_1 = require("./userSchema");
const lodash_1 = require("lodash");
const resolver_1 = require("./resolver");
const resolvers = lodash_1.merge(resolver_1.UserResolver);
const SchemaDefinicao = `
   type Schema {
       query:Query
       mutation: Mutation 
   }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        SchemaDefinicao,
        query_1.Query,
        mutation_1.Mutation,
        userSchema_1.userTypes
    ],
    resolvers
});
//# sourceMappingURL=schema.js.map