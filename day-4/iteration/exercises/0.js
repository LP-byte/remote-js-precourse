const { check, printGreenMessage, printRedMessage } = require("../../../test-api");
const items = [];
for (let i = 1; i<21; i++){
  items.push(i)

// use a loop to solve this problem :)
}
console.log("check the numbers 1 up to 20 are pushed into items");

try {
  check(items).isEqualTo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
