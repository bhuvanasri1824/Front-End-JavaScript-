/*let btn = document.querySelector("button");
btn.addEventListener("click",async () => {
     let fact = await getFacts();                 // async function is used await isused to display the promises
     console.log(fact);
     let p = document.querySelector("#result");  //tk9999999999o access on webpage
     p.innerText = fact;                         // to display

})

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breads/image/random";

async function getFacts () {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e) {
        console.log("error - ",e);
        return "no fact found";
    } 
}*/
/* Activity for finding colleges  */ 

const url = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {

    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    Show(colArr);;

});
function Show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country)  {
    try {    
        let res = await axios.get(url + country);
        return res.data;
        }catch(e) {
        console.log("error : ", e);
        return [];
        
    } 
}