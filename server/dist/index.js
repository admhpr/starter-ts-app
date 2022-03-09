"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = "8080";
async function main() {
    http_1.default
        .createServer((_, response) => {
        response.writeHead(200, {
            "Content-Type": "text/plain",
        });
        response.write("Hello Server!\n");
        response.end();
    })
        .listen(PORT);
}
main().catch((error) => console.error(error));
//# sourceMappingURL=index.js.map