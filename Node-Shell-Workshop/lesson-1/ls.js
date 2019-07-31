const fs = require("fs");
const path = require("path");

if (process.argv[2] == "-ex") {
  fs.readdir(process.cwd(), (err, files) => {
    if (err) throw err;
    files.forEach(item => {
      if (path.extname(item) == "." + process.argv[3])
        process.stdout.write(item + "  ");
    });
  });
} else {
  fs.readdir(process.cwd(), (err, files) => {
    if (err) throw err;
    files.forEach(item => {
      process.stdout.write(item + "  ");
    });
  });
}
