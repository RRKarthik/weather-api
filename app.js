const form = document.getElementById("form");
const btn = document.getElementById("submit");
const result = document.getElementById("result");
const container = document.querySelector("div.container");
btn.addEventListener("click",getPlace);
function getPlace(e)
{
    e.preventDefault();
    let place = form.elements[0].value;
    api(place);
    container.style.display = "none";
    result.style.display = "block"
}
async function api(value)
{
let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b79045b9e20ad59b0eb0026df9832112&units=metric`,{mode:'cors'});
let data = (await x.json());
let name = data["name"];
let weather = data["weather"][0]["description"];
let temp = data["main"]["temp"];
updateResult(name,weather,temp);
}

function updateResult(name,weather,temp)
{
    let h1 = document.createElement("h1");
    h1.innerHTML = name;
    result.appendChild(h1);
    let description = document.createElement("p");
    description.innerHTML = weather;
    result.appendChild(description);
    let tempPara = document.createElement("p");
    tempPara.innerHTML = temp+" &deg;c";
    result.appendChild(tempPara);
}