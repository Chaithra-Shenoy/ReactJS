// function doHomework(subject, () =>{
//     alert('Finished my homework');
//   }) {
//     alert(`Starting my ${subject} homework.`);
//   }
/******************************************************** */
// var fs = require("fs");

// fs.readFile('mynewfile2.txt', function (err, data) {
//    if (err) {
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("Program Ended");
/**************************************************************** */
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
console.error("error error !!")
console.debug("debug debug!!")
console.warn("WARNING!!!")
console.trace("tracing...")

//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")