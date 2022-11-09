"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const userSchema_1 = require("./userSchema");
const Query = `
type Query{
    ${userSchema_1.userQueries}
}

`;
exports.Query = Query;
//# sourceMappingURL=query.js.map