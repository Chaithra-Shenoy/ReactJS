var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/test1',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log( __filename );
   console.log("Directory created successfully!");
});