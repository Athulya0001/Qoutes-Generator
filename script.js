// let button = document.getElementById("btn")

async function fetchQuotes(){
    let data = await fetch('https://dummyjson.com/quotes');
    let response = await data.json()
    console.log(response)
}

fetchQuotes().then(value=>{
    // console.log(value)
})