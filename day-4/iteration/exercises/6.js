const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const alternatingChars = [];

for (i =0; i<8; i++){
  if (i%2 ===0){
    alternatingChars.push("x")
  }else {alternatingChars.push("o")}
}
console.log("can push alternating characters into an array");

try {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
