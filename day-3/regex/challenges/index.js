const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

// Declare and implement a function isValidSortCode
// Checks if a passed string is a valid sort code - this should be 2 digits hyphen 2 digits hyphen 2 digits

function isValidSortCode (code){
2
  const isValid =  /^\d{2}[-]\d{2}[-]\d{2}$/.test(code);
  console.log(isValid)
  return isValid;

}

console.log("isValidSortCode() should check is a sort code string is in the correct format");

try {
  check(isValidSortCode).whenCalledWith("10-34-67").returns(true);
  check(isValidSortCode).whenCalledWith("51-34-58").returns(true);
  check(isValidSortCode).whenCalledWith("85-16-23").returns(true);

  check(isValidSortCode).whenCalledWith("51-349-67").returns(false);
  check(isValidSortCode).whenCalledWith("7980-34-67").returns(false);
  check(isValidSortCode).whenCalledWith("34-12-899").returns(false);
  check(isValidSortCode).whenCalledWith("a8-78-10").returns(false);
  check(isValidSortCode).whenCalledWith("45_78_10").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
