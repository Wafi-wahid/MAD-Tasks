//TODO: importing obj from module file

const obj = require("./Module.js");
console.log(obj.name); // Output: wafi

//TODO: normal function
function world() {
  var name = "Earth";
  console.log("Hello, " + name);
}
world();

//TODO: Anonymous function
var world1 = function () {
  let name = "Mars"; //block scope
  name = "saturn";
  console.log("Hello, " + name);
};
world1();

//TODO: Arrow function
const world2 = () => {
  const name1 = "Moon";
  console.log("Hello, " + name1);
};
world2();
