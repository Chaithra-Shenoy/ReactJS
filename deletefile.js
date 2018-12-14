var fs = require("fs");

console.log("Going to delete an existing file");
//file will be delted permanently
fs.unlink('/test1', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});