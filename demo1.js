var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');
//console.log(readStream)
//console.log(readStream.close)
fs.readFile("demofile.txt","utf8",function (err,contents) {
console.log(err)
console.log(contents)
});
fs.open('mynewfile2.txt', 'w', function (err, file) {
  console.log(file.valueOf())
  if (err) throw err;
  console.log('Saved!');
});

readStream.on('open', function (contents,err) {
  console.log('The file is open');
  console.log(contents)
  console.log(err)
});