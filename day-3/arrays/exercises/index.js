const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

console.log("checking multiTypeArray");

try {
  const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

  check("string").isEqualTo(typeof multiTypeArray[0]);
  check("number").isEqualTo(typeof multiTypeArray[1]);
  check("boolean").isEqualTo(typeof multiTypeArray[2]);
  check("object").isEqualTo(typeof multiTypeArray[3]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("checking alphaSample");

try {
  const alphaSample = ["a", "b", "c"];
  alphaSample.push("d");
  alphaSample.push("g");

  check(["a", "b", "c", "d", "g"]).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();

  check("g").isEqualTo(lastItem);
  check(["a", "b", "c", "d"]).isEqualTo(alphaSample);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("working with nested arrays");
try {
  const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  check(["a", "b", "c"]).isEqualTo(rows[0]);
  check(["d", "e", "f"]).isEqualTo(rows[1]);
  check(["g", "h", "i"]).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo("a");
  check(firstRow[1]).isEqualTo("b");

  check(rows[1][1]).isEqualTo("e");
  check(rows[2][0]).isEqualTo("g");
  check(rows[0][2]).isEqualTo("c");

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("get the slice of an array");

try {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

  check(["b", "c", "d"]).isEqualTo(letters.slice(1, 4));
  check(["c"]).isEqualTo(letters.slice(2, 3));
  check(["d", "e"]).isEqualTo(letters.slice(3, 5));
  check(["n"]).isEqualTo(letters.slice(-1));
  check(["m","n"]).isEqualTo(letters.slice(-2));
  check(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]).isEqualTo(letters.slice(0, -4));

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
