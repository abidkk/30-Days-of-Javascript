// Combining Conditions

// Task 7: Find a leap year
let year = 2009;
if (year % 4 == 0 && year % 100 !== 0  || year % 400 == 0) {
    console.log("The year is Leap")
}else{
    console.log("The Year is not Leap")
}