console.log("Hello");
async function api()
{
let x = await fetch("https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=b79045b9e20ad59b0eb0026df9832112",{mode:'cors'});
console.log(await x.json());
}
api();