var fs = require("fs");
var data = '';
console.log("zzzzzzzzzzzzzzzzz")
// Create a readable stream
var readerStream = fs.createReadStream('mynewfile.txt');
console.log("ooooooooooooooooooooo")
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

console.log("eeeeeeeeeeeeeeeeeeeeee")
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log("ffffffffffffffffffffff")
   data += chunk;
   console.log("ggggggggggggg")
});

readerStream.on('end',function() {
    console.log("aaaaaaaa")
   console.log(data);
   console.log("bbbbbbbbbbbb")
});

readerStream.on('error', function(err) {
    console.log("ccccccccccccc")
   console.log(err.stack);
   console.log("dddddddd")
});

console.log("Program Ended");