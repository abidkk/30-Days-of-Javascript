// Function Expression

// Task3 : Function expression to find max of two numbers

let findMax = function (v1, v2) {
  if (v1 > v2) {
    return `${v1} is greater`;
  } else {
    return `${v2} is greater`;
  }
};
console.log(findMax(22, 21));


// Task4: Function expression to concate two strings
let joinStrings = function (n1,n2){
    return n1+n2;
}
console.log(joinStrings("Blue","1000"))