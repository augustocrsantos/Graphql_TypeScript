"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const server = http.createServer(app_1.default);
server.listen(3000);
server.on('listening', () => console.log('ouvido'));
//# sourceMappingURL=index.js.map