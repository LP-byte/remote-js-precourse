const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const sounds = ["fizz", "buzz", "bang", "crash", "wallop"];
const exclaimedSounds = [];

for (let i = 0; i < sounds.length; i++){
  exclaimedSounds.push(sounds[i] + "!")
  console.log(exclaimedSounds)
}
console.log("check strings with added ! are pushed into exclaimedSounds");

try {
  check(exclaimedSounds).isEqualTo(["fizz!", "buzz!", "bang!", "crash!", "wallop!"]);
  
  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
