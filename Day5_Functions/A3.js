// Arrow Functions

// Task5: Arrow function to calculate the sum of two numbers

let sumNums=(v1,v2)=>{
return v1+v2;
}
console.log(sumNums(20,30))

// Task6: Arrow function to check a string contain the specific character and retun boolean true or false

let checkCharacter = (word)=>{
    return word.includes("h")
}

console.log(checkCharacter('chairs'))