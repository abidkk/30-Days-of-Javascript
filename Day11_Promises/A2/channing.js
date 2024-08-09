// Task : create a sequence of promise that simulate fetching data form a server. Chain the promise to log message in a specific order
// Simulating fetching data from a server

let fetchData = (data)=>{
    return (new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data)

        },3000)
    }))
}
// Channing
fetchData("Fetching Data from server...")
.then((message)=>{
    console.log(message);
    return fetchData("Data fetched, Now fetching images...")
})
.then((message)=>{
    console.log(message);
    return fetchData("Images fetched, Now fetching videos...")
})
.then((message)=>{
    console.log(message);
    return fetchData("fetched completed")
})
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.log(err);
    
})

