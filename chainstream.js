var fs = require("fs");
var zlib = require('zlib');

// Compress the file myfile2.txt to myfi.txt.gz
//if inputfile is not found it throws an error
fs.createReadStream('myfile2.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('myfi.txt.gz'));
  
console.log("File Compressed.");