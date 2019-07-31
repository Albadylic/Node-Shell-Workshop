const fs = require("fs");

const readStream = fs.createReadStream(process.argv[2]);
let fileContent = "";

readStream.on("data", chunk => {
  fileContent += chunk;
});

readStream.on("end", () => {
  process.stdout.write(fileContent);
});
