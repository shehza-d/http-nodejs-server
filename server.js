import { createServer } from "node:http";

const server = createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Shehzad World!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
