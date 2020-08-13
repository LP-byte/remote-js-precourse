const phoneBook = {
  anat: "+44981513462",
  sam: "+44981513419",
  shaq: "+4498674321",
};

const name = "anat";
const anatPhoneNo = phoneBook.name;

console.log(anatPhoneNo);

// What will happen when this file is executed with NodeJS ? undefinded 
// What is the problem with this code ? The valye needs to be assigned toproperty using bracket notation
