// Concurrent Promise

// Task: use promise.all to wait for multiple promises to resolved and then log all their values.

let prom1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 1 Resolved")
    },1000)
});

let prom2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 2 Resolved")
    },2000)
});

let prom3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 3 Resolved")
    },3000)
});

Promise.all([prom1,prom2,prom3])
.then((values)=>{
    console.log("All promise resolved");
    console.log(values); 
})
.catch((err)=>{
    console.log(err);
    
})