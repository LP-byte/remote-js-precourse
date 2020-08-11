const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function isBiggerThan10(n) {
  // checks if an number is strictly bigger than 10 and returns a message accordingly


    const MessageOne = "Number " + n + " is less than 10";
    const MessageTwo = "Number " + n + " is equal to 10";
    const MessageThree = "Number " + n + " is more than 10";

        if (n < 10) {return MessageOne
        } 
  
        else if (n === 10){return MessageTwo
        } 
        
        else{return MessageThree}
}

console.log("isBiggerThan10() returns a message indicating if a number is bigger than 10");
try {
  check(isBiggerThan10).whenCalledWith(3).returns("Number 3 is less than 10");
  check(isBiggerThan10).whenCalledWith(4).returns("Number 4 is less than 10");
  check(isBiggerThan10).whenCalledWith(5).returns("Number 5 is less than 10");
  check(isBiggerThan10).whenCalledWith(10).returns("Number 10 is equal to 10");
  check(isBiggerThan10).whenCalledWith(11).returns("Number 11 is more than 10");
  check(isBiggerThan10).whenCalledWith(100).returns("Number 100 is more than 10");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isFalsy(value) {
  // checks if a value is falsy and returns true if it is - returns false otherwise
return !value;
}

console.log("is Falsy() returns true if a value is falsy and false if it is truthy");

try {
  check(isFalsy).whenCalledWith(false).returns(true);
  check(isFalsy).whenCalledWith("").returns(true);
  check(isFalsy).whenCalledWith(0).returns(true);
  check(isFalsy).whenCalledWith(NaN).returns(true);
  check(isFalsy).whenCalledWith(undefined).returns(true);
  check(isFalsy).whenCalledWith(null).returns(true);

  check(isFalsy).whenCalledWith(10).returns(false);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}

function readTrafficLight(color) {
  // this function should check if the "traffic light" is red, green or amber and return a corresponding message
if (color == 'green' || color == "GREEN"){return "GO!"}
else if (color == 'amber' || color == "AMBER"){return "GET READY..."}
else if (color == 'red' || color == "RED"){return "STOP!"}
else {return 'No idea'}

}

console.log("readTrafficLight() should print a message according to the different colour passed in");

try {
  check(readTrafficLight).whenCalledWith("green").returns("GO!");
  check(readTrafficLight).whenCalledWith("GREEN").returns("GO!");

  check(readTrafficLight).whenCalledWith("amber").returns("GET READY...");
  check(readTrafficLight).whenCalledWith("AMBER").returns("GET READY...");

  check(readTrafficLight).whenCalledWith("red").returns("STOP!");
  check(readTrafficLight).whenCalledWith("RED").returns("STOP!");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isMultipleOf6(num) {
  // isMultipleOf6 check if a passed value is a multiple of 6

      if (num === 6){return true
      }  
      const newNum = num/6;
      
      if (newNum%2===0){return true
      } 
      
      else {return false
      }

}

console.log("isMultipleOf6() should check if a number is divisible by 6");

try {
  check(isMultipleOf6).whenCalledWith(6).returns(true);
  check(isMultipleOf6).whenCalledWith(10).returns(false);
  check(isMultipleOf6).whenCalledWith(15).returns(false);
  check(isMultipleOf6).whenCalledWith(36).returns(true);
  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function checkInfinitive(str) {
  // checkInfinitive() will check if a French word is an infinitive French verb
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
const lastStr = str.length;
const secLastStr = str.length-2;
const laststrings = str.substring(lastStr, secLastStr);
  

  if (laststrings == "er"){
  return true
} else if (laststrings == "ir"){
  return true
} else if (laststrings == "re"){
  return true
} else return false;

}

console.log("checkInfinitive() checks if a french word is an infinitive");
try {
  check(checkInfinitive).whenCalledWith("manger").returns(true);
  check(checkInfinitive).whenCalledWith("faire").returns(true);
  check(checkInfinitive).whenCalledWith("aller").returns(true);
  check(checkInfinitive).whenCalledWith("aller").returns(true);
  check(checkInfinitive).whenCalledWith("finir").returns(true);
  check(checkInfinitive).whenCalledWith("rendre").returns(true);
  check(checkInfinitive).whenCalledWith("savoir").returns(true);

  check(checkInfinitive).whenCalledWith("suis").returns(false);
  check(checkInfinitive).whenCalledWith("ai").returns(false);
  check(checkInfinitive).whenCalledWith("ete").returns(false);
  check(checkInfinitive).whenCalledWith("sais").returns(false);
  check(checkInfinitive).whenCalledWith("allons").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function checkGame(dice, coin) {
  // checkGame() should take a value from a diceRoll ( a number from 1 to 6 )
  // and should also take the result from a coinToss (either "H" for heads or "T" for tails)
  // the function should return true if the player wins the game - getting a dice roll of 3 or higher AND a coinToss of 'H'
  // means that you have won the game :)
if (coin =='H' && dice >=3){
  return true
} else {return false}

}

console.log("checkGame() should check if a user was won the game");
try {
  check(checkGame).whenCalledWith(3, "H").returns(true);
  check(checkGame).whenCalledWith(4, "H").returns(true);
  check(checkGame).whenCalledWith(5, "H").returns(true);
  check(checkGame).whenCalledWith(6, "H").returns(true);
  check(checkGame).whenCalledWith(6, "T").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function checkBatteryLevel(battery) {
  // if the battery level is less than or equal to 5%, then it should return a string stating:
  // "Warning - battery level low: <number-here>%, please charge your device"
  // if the battery level is between 5 and 99% then it should return a string stating:
  // "Battery level: <number-here>%"
  // if the battery level is 100% then it shoud return a string stating:
  // "Fully charged :)"


    const batMessage01 = "Battery level: " + battery + "%";
    const batMessage02 = "Warning - battery level low: " + battery + "%, please charge your device";
    const batMessage03 = "Fully charged :)"

        if (battery <100 && battery>5){return batMessage01;
        
        }
        else if (battery <=5){return batMessage02
         
        } else {return batMessage03}

}

console.log("checkBatteryLevel() should return a message with info about the battery level");

try {
  check(checkBatteryLevel).whenCalledWith("100").returns("Fully charged :)");

  check(checkBatteryLevel).whenCalledWith("99").returns("Battery level: 99%");
  check(checkBatteryLevel).whenCalledWith("80").returns("Battery level: 80%");
  check(checkBatteryLevel).whenCalledWith("30").returns("Battery level: 30%");
  check(checkBatteryLevel).whenCalledWith("10").returns("Battery level: 10%");
  check(checkBatteryLevel).whenCalledWith("6").returns("Battery level: 6%");

  check(checkBatteryLevel).whenCalledWith("5").returns("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("4").returns("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("3").returns("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel).whenCalledWith("1").returns("Warning - battery level low: 1%, please charge your device");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getOrdinalSuffix(num) {
  // an ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd
  // E.g. "st" is an ordinal suffix as we'd write 1st etc
  // getOrdinalSuffix() should take a number and return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
  
  
  if (num == 1){
  return "st"
} else if (num == 2){
  return "nd"
} else if (num == 3){
  return "rd"
} else if (num > 20 && num% 10 === 1){
  return "st"
} else if (num > 20 && num %10 ===2){
  return "nd"
} else if (num > 20 && num %10 ===3){
  return "rd"
} 
else {

  return "th"} 


}
console.log("getOrdinalSuffix() should give the correct ordinal suffix for a number");

try {
  check(getOrdinalSuffix).whenCalledWith(1).returns("st");
  check(getOrdinalSuffix).whenCalledWith(2).returns("nd");
  check(getOrdinalSuffix).whenCalledWith(3).returns("rd");
  check(getOrdinalSuffix).whenCalledWith(4).returns("th");
  check(getOrdinalSuffix).whenCalledWith(5).returns("th");
  check(getOrdinalSuffix).whenCalledWith(10).returns("th");
  check(getOrdinalSuffix).whenCalledWith(11).returns("th");
  check(getOrdinalSuffix).whenCalledWith(12).returns("th");
  check(getOrdinalSuffix).whenCalledWith(13).returns("th");
  check(getOrdinalSuffix).whenCalledWith(14).returns("th");
  check(getOrdinalSuffix).whenCalledWith(15).returns("th");
  check(getOrdinalSuffix).whenCalledWith(16).returns("th");
  check(getOrdinalSuffix).whenCalledWith(17).returns("th");
  check(getOrdinalSuffix).whenCalledWith(18).returns("th");
  check(getOrdinalSuffix).whenCalledWith(19).returns("th");
  check(getOrdinalSuffix).whenCalledWith(20).returns("th");
  check(getOrdinalSuffix).whenCalledWith(21).returns("st");
  check(getOrdinalSuffix).whenCalledWith(22).returns("nd");
  check(getOrdinalSuffix).whenCalledWith(23).returns("rd");
  check(getOrdinalSuffix).whenCalledWith(32).returns("nd");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage(error);
}
