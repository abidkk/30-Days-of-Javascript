// Function Paramters and default values

// Task7: Function takes two parameters and retuns their products but make second parameter as default value

let findProduct = (v1,v2 = 30)=>{
    return v1 * v2;
}

console.log(findProduct(10))

//  Note: First parameter can not be set default value in case of multi parameters


// Task8: Fucntion that take a person name and age as parameters and greet them


let greet = (personName, personAge)=> {
    return(`Welcome to Karachi, Mr. ${personName} when you are ${personAge}.`)
}

console.log(greet("Hitesh", 42))