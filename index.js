import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const PORT = 3000;

let server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
