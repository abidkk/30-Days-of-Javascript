// Rest and Spread Operators

// Task 5: use spread ope to create new array that includes all elements of an existing array plus additional element, and log the the new array to the console
let nums = [20,30,40,50,60,70]
let newArray = [...nums, 80,90,100,200,300,400,500]
console.log(newArray);




// Task 6: use rest operator in a function to accept the arbitary number of arguments, sum them, and return the result 
function showSum(...num){
    return num.reduce((acc, current) => acc + current, 0);
}
console.log(showSum(1,2,3));


// Extra 
function showColors(...color){
    return color;
}

console.log(showColors("Green", "Blue", "Black"));
