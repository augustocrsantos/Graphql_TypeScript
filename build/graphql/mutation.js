"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const userSchema_1 = require("./userSchema");
const Mutation = `
type Mutation {

    ${userSchema_1.userMutation}
}
`;
exports.Mutation = Mutation;
//# sourceMappingURL=mutation.js.map