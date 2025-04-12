import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const PORT = 3000;

// var image_path = [Pic1, pic2, pic3, pic4];

var images = {
  pic1: "First Picture",
  pic2: "Second Picture",
  pic3: "Third Picture",
  pic4: "Fourth Picture",
};

function requestHandler(request, response) {
  let endpoint = request.url.split("?")[0];
  console.log("Endpoint:", endpoint);

  // Retrieve query parameters
  let params = new URLSearchParams(request.url.split("?")[1]);
  console.log("Params:", params.get("name"));

  switch (request.method) {
    case "GET":
      if (endpoint === "/") {
        console.log("Fetching users");
        response.end(JSON.stringify(images));
      } else {
        // let location = path.resolve("./sample");
        // fs.readFile(location, "utf-8", (err, data) => {
        //   if (err) console.log("Reading file failed");
        //   response.end(data);
        // });
        let location = path.resolve("./Home_Images", "pic2.jpg");
        console.log(location);

        fs.readFile(location, (err, data) => {
          if (err) console.log("Reading file failed");
          // response.writeHead(500, { "content-type": "image/jpeg" });
          response.writeHead(200, { "Content-type": "image/jpg" });
          // response.writeHead(200, { "Content-Type": "application/json" });
          // response.end(JSON.stringify(data));
          // console.log(data);
          response.end(data);
        });

        // console.log(location);
        // response.writeHead(404, { "content-type": "image/jpg" });
        // response.end(location, "binary");
      }
      break;
    case "POST":
      console.log("Creating");
      break;
    case "PUT":
      console.log("Updating");
      break;
    case "DELETE":
      console.log("Deleting");
      break;
    default:
      break;
  }
}

let server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// else {
//   // Serve a simple HTML page that displays the image
//   const html = `
//     <html>
//       <body>
//         <h2>Image from Node.js Server</h2>
//         <img src="pic1.jpg" alt="Image" />
//       </body>
//     </html>
//   `;
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.end(html);
// }
