// Async-Await

// Task 2: Write a async function that handles rejected promise using try-catch and log the error message


let fun2 = async () => {
    const myProm2 = new Promise((res, rej) => {
        setTimeout(() => {
            rej("Promise Rejected");
        }, 2000)
    });

    try{
        const resP = await myProm2;
        console.log(resP);
    }catch(err){
        console.log(err);
    }
}

fun2()


