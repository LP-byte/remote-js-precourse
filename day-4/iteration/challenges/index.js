
function makeAllUpperCase(arr){

  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
  }
  return arr
}

const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

console.log("makeAllUpperCase() can get all the strings from an array");


try {
  check(makeAllUpperCase).whenCalledWith(["a", "b", "c"]).returns(["A", "B", "C"]);
  check(makeAllUpperCase).whenCalledWith(["I", "love", "coding"]).returns(["I", "LOVE", "CODING"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function collectStrings(arr){
  let justStr = []
  for (let i = 0; i<arr.length; i++){
    if (typeof arr[i] == "string"){
      justStr.push(arr[i])
    }
  }
  return justStr
}

console.log("collectStrings() can get all the strings from an array");
try {
  check(collectStrings).whenCalledWith(["a", "b", "c"]).returns(["a", "b", "c"]);
  check(collectStrings).whenCalledWith(["a", 10, "b", 1000, "c"]).returns(["a", "b", "c"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}


function getEvenNumbers(arr){

let justEvens = [];  

for (let i =0; i<arr.length; i++){
  if (arr[i]%2 ===0){
    justEvens.push(arr[i])
  }
}
return justEvens
}

console.log("getEvenNumbers() can get all the even numbers from an array of numbers");
try {
  check(getEvenNumbers).whenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).returns([2, 4, 6, 8, 10]);
  check(getEvenNumbers).whenCalledWith([9, 100, 13, 20]).returns([100, 20]);
  check(getEvenNumbers).whenCalledWith([78, 5, 9, 11, 24]).returns([78, 24]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}


function collectPlurals(arr){
let justPlurals = [];
for (let i = 0; i <arr.length; i++){
  if (arr[i].endsWith('s', arr[i].length)){
    justPlurals.push(arr[i])
  }
}
return justPlurals
}

console.log("collectPlurals() can collect all the strings ending in an s");
try {
  check(collectPlurals)
    .whenCalledWith(["dogs", "cat", "apples", "kittens", "kiwi"])
    .returns(["dogs", "apples", "kittens"]);

  check(collectPlurals)
    .whenCalledWith(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])
    .returns(["abcs", "humans", "thoughts", "cups"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// creates an array of the given length populated with the given char

function createArray(num, char){

  let charArr = []
  for (let i = 0; i<num; i++){
  charArr.splice(i, 0, char)

  }

  return charArr
}
console.log("createArray() creates an array of the specified length using a specified character");
try {
  check(createArray).whenCalledWith(3, "!").returns(["!", "!", "!"]);
  check(createArray).whenCalledWith(5, "a").returns(["a", "a", "a", "a", "a"]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function deleteManyPasswords(users){

  return users.map(({password,...restOfObj}) => restOfObj)
}

console.log("deleteManyPasswords() deletes the password property for each user");
try {
  check(deleteManyPasswords)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
function countTheObjects(arr) {
let count = 0; 
arr.forEach(objCount => { 
  if (typeof objCount === "object" && objCount !== null && !Array.isArray(objCount)) {
    
  count++; 
  }
});

return count;
}

console.log("countTheObjects() counts all the objects in an array of multi-type items");
try {
  check(countTheObjects)
    .whenCalledWith([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
    .returns(3);
  check(countTheObjects).whenCalledWith([{}, {}, {}, {}, {}]).returns(5);
  check(countTheObjects).whenCalledWith([1, {}, true, {}, {}, false, {}, {}]).returns(5);
  check(countTheObjects)
    .whenCalledWith([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])
    .returns(5);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
