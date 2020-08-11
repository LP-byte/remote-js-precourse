const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function double(n) {
  // return any number doubled
let doubleNum =  n * 2;
return doubleNum;

}

console.log("double() gives the correct output");
try {
  check(double).whenCalledWith(11).returns(22);
  check(double).whenCalledWith(129).returns(258);
  check(double).whenCalledWith(25).returns(50);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function modulo(num, div) {
  // return the remainder of the division a / b
const remainderOfNum = num%div;
return remainderOfNum;

}

console.log("modulo() gives the correct output");
try {
  check(modulo).whenCalledWith(10, 2).returns(0);
  check(modulo).whenCalledWith(119, 10).returns(9);
  check(modulo).whenCalledWith(50, 6).returns(2);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function squareRoot(num) {
  // return the square root of n

let sqRoot = Math.sqrt(num);
return sqRoot; 

}

console.log("squareRoot() works for positive integers");

try {
  check(squareRoot).whenCalledWith(100).returns(10);
  check(squareRoot).whenCalledWith(25).returns(5);
  check(squareRoot).whenCalledWith(121).returns(11);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function raiseToPower(num, pow) {
  const toPower = Math.pow(num,pow);
  return toPower;

  // return the result of raising m to the nth power
}

console.log("raiseToPower() raises given number to a power");
try {
  check(raiseToPower).whenCalledWith(10, 3).returns(1000);
  check(raiseToPower).whenCalledWith(25, 2).returns(625);
  check(raiseToPower).whenCalledWith(10, 0).returns(1);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getLength(str) {

  return str.length;
  // return the length of the passed string
}

console.log("getLength() returns the correct string length");
try {
  check(getLength).whenCalledWith("jonny").returns(5);
  check(getLength).whenCalledWith("jd").returns(2);
  check(getLength).whenCalledWith("rosa").returns(4);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function putNamesTogether(firstName, lastName) {

  return firstName + " " + lastName;
  // return the first and last names with a space between them
}

console.log("putNamesTogether() can join two strings with a space");
try {
  check(putNamesTogether).whenCalledWith("izzi", "maccabee").returns("izzi maccabee");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function capitaliseString(str) {

  return str.toUpperCase();
  // return the passed string with its first letter capitalised
}

console.log("capitaliseString() can capitalise a single word");
try {
  check(capitaliseString).whenCalledWith("bang").returns("BANG");
  check(capitaliseString).whenCalledWith("apple").returns("APPLE");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function capitaliseFirstLetter(str) {
let newStr = str[0].toUpperCase();
let restOfWord = str.substr(1, str.length-1);
return newStr + restOfWord

}

console.log("capitaliseFirstLetter() can capitalise the first letter in a string");
try {
  check(capitaliseFirstLetter).whenCalledWith("bang").returns("Bang");
  check(capitaliseFirstLetter).whenCalledWith("apple").returns("Apple");
  check(capitaliseFirstLetter).whenCalledWith("coding").returns("Coding");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function areValuesEqual(a, b) {
return a===b;

  // return true if the passed arguments are strictly equal;
}

console.log("areValuesEqual() checks if two values are the same");
try {
  check(areValuesEqual).whenCalledWith(10, 10).returns(true);
  check(areValuesEqual).whenCalledWith("good", "bad").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isFromThe60s(year) {

if (year >1959 && year < 1970){
  return true;

} else {return false}
  // return true if the year is in the 1960's
  // returns false otherwise
}

console.log("isFromThe60s() checks if two values are the same");
try {
  check(isFromThe60s).whenCalledWith(1962).returns(true);
  check(isFromThe60s).whenCalledWith(1965).returns(true);
  check(isFromThe60s).whenCalledWith(1990).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isEvenLength(string) {
      
  const lengthStr = string.length; 
  if (lengthStr % 2 ===0) {return true} else {return false} 
}

console.log("isEvenLength() checks if string has even number of characters");
try {
  check(isEvenLength).whenCalledWith("hello").returns(false);
  check(isEvenLength).whenCalledWith("abcd").returns(true);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function isAbsolutePath(str) {
  // checks if a string is an absolute path - does it start with a /
  // HINT: all absolute file paths start with a /
if (str.startsWith('/')) {
  return true
} else return false


}

console.log("isAbsolutePath() checks if a file path is absolute or relative");

try {
  check(isAbsolutePath).whenCalledWith("/Users/mitch").returns(true);
  check(isAbsolutePath).whenCalledWith("/Users/mitch/northcoders/remote_course/remote_precourse_1").returns(true);
  check(isAbsolutePath).whenCalledWith("../composers").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  // HINT: You could use the ternary operator for this challenge
  const stringLen = str.length;
  const middleStr = Math.floor(stringLen / 2)
if(stringLen %2 === 0){
  return str[middleStr -1] + str [middleStr];
} else return str[middleStr];

}

console.log("getMiddle() returns the middle character in a string of odd length");
try {
  check(getMiddle).whenCalledWith("abc").returns("b");
  check(getMiddle).whenCalledWith("mitch").returns("t");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getMiddle() returns the middle characters in a string of even length");
try {
  check(getMiddle).whenCalledWith("abcd").returns("bc");
  check(getMiddle).whenCalledWith("blob").returns("lo");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function getCharCode(char) {
  // returns a sentence stating the character code for a given character
  // Look up ASCII online to get a better idea of what a character code is

  return "The ASCII character for " + char + " is " + char.charCodeAt();
}

console.log("getCharCode() will return a message stating the ascci code of a passed char");

try {
  check(getCharCode).whenCalledWith("A").returns("The ASCII character for A is 65");
  check(getCharCode).whenCalledWith("b").returns("The ASCII character for b is 98");
  check(getCharCode).whenCalledWith("z").returns("The ASCII character for z is 122");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function createPercentage(per, num) {
  // should take a 2 numbers and work out their percentage
  let numCal = per / num * 100;
  return Math.round(numCal) + "%";
}
console.log('createPercentage() creates a percentage string in the form "--%"');

try {
  check(createPercentage).whenCalledWith(1, 2).returns("50%");
  check(createPercentage).whenCalledWith(50, 100).returns("50%");
  check(createPercentage).whenCalledWith(2, 3).returns("67%");
  check(createPercentage).whenCalledWith(3, 4).returns("75%");
  check(createPercentage).whenCalledWith(1, 7).returns("14%");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function extractNumber(str) {

const openBracket = str.indexOf('(');
const closeBracket = str.indexOf(')');
let numOfStr = str.substring(openBracket + 1, closeBracket)
return Number(numOfStr);
  // shoudld extract a number embedded in a string surrounded by ( ) parentheses
}

console.log("extractNumber() should return the number buried inside a string");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
