// Matrix | Two Dimenional Array

// Task 12: Create 2d array and log
let arr2d = [10,20,30,40,50, [11,22,33,44,55]]
console.log(arr2d);



// Task 13: Access specific element from 2d array

console.log(arr2d[5][2]); //33


// Map Method on 2d Array
arr2d.map((x)=>{
if (Array.isArray(x)) {
    x.map((z)=>{
        console.log(z);
        
    })
}
else{
    console.log(x)
}
})


