// Task1 : fetch api data and log using Promise

let getData = (url)=>{
    fetch(url)
    .then((res)=>{

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json()
    })
    .then((data)=>{
        console.log(`Api response : ${data}`);
    })
    .catch((err)=>{
        console.log(err);
    })
}

getData('https://jsonplaceholder.typicode.com/todos')