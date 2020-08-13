const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

let total = 0;

for (let i = 0; i<51; i++){
  total += i
  console.log(total)
}

console.log("calculate the sum of several numbers using a loop");

try {
  check(total).isEqualTo(1275);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
