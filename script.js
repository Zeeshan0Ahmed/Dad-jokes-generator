const btnEl = document.getElementById("btn");
const jokeEl =document.getElementById("joke");

const getApi = "WxusZYcBF4t/DHy/bOGqag==7dvrFcWwtfJYgUum";
const options ={
    method: "GET",
    headers: {
       "X-Api-Key" : getApi,
    },
};
async function addJokes(){
try {
        const apiurl ="https://api.api-ninjas.com/v1/dadjokes?limit=1";
        
            jokeEl.innerText = "UPDATING..."
            btnEl.disabled = true;
            btnEl.innerText = "Loading";
        const response = await fetch(apiurl, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        jokeEl.innerText = data[0].joke;
}
 catch (error) {
    jokeEl.innerText = "An Error Happened";
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    console.log(error)
}
}

btnEl.addEventListener("click" , addJokes);