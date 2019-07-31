const fs = require("fs");

var data = "Simply sleasy learning";

// we are creating a writable stream
var writeStream = fs.createWriteStream("output.txt");

// write our data to the stream with encoding, to be utf8
writeStream.write(data, "UTF8");

// end the file
writeStream.end();

// when the stream has finished, log "write has been completed"
writeStream.on("finish", function() {
  console.log("Write is completed.");
});
