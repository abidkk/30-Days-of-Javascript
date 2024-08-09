// Async-Await

// Task 1: Write a async function that waits for a Promise to resolve then log the resolved value
let fun = async () => {
    const myProm = new Promise((res, rej) => {
        setTimeout(() => {
            res("Promise Resolved");
        }, 2000)
    });


    const promR = await myProm;
    console.log(promR);
}

fun()


