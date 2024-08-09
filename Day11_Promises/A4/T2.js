let getTodo = async ()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await data.json()
    console.log(data);
}
getTodo()