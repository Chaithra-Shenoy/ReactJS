var fs = require("fs");
var data = '1234';

// Create a writable stream
var writerStream = fs.createWriteStream('myfile2.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'ascii');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.error("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");