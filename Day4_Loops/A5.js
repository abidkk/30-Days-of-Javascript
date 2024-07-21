// Task8: Print number 1 to 10 but skip number 5 (use continue statement)

for (let a = 1; a <= 10; a++) {
    if (a == 5) {
        continue
    }
    console.log(a)
}


// Task9: Print number 1 to 10 but stop on number 7 (use break statement)
console.log("Break Statement")

for (let b = 1; b <= 10; b++) {
    if (b == 7) {
        break;
    }
    console.log(b)
}