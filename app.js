const form = document.getElementById("form");
const btn = document.getElementById("submit");
btn.addEventListener("click",getPlace);
function getPlace(e)
{
    e.preventDefault();
    let place = form.elements[0].value;
    api(place);
}
async function api(value)
{
let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b79045b9e20ad59b0eb0026df9832112`,{mode:'cors'});
console.log(await x.json());
}
