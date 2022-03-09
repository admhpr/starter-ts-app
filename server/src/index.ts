import http from "http";
const PORT = "8080";
async function main() {
  http
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
