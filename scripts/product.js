import { MAIN_API_KEY } from "./config.js";
import { CONTENT_API_KEY } from "./config.js"; // Both are valid

const params = new URLSearchParams(window.location.search);
const productId = params.get('product');

const response = await fetch("https://live.icecat.biz/api?lang=EN&icecat_id="+productId+"&UserName=Hung027558", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+MAIN_API_KEY,
    // "api-token": MAIN_API_KEY, // Doesn't work
    // "content-token": CONTENT_API_KEY // Doesn't work
  },
});
const data = await response.json()
console.log(data) // works normally, displays what you'd expect
document.getElementById("carousel-one").src = data.data.Gallery[0].Pic
for (var i = 1; i < data.data.Gallery.length; i++) {
    document.getElementById("carousel").innerHTML += `<div class="carousel-item"><img src="${data.data.Gallery[i].Pic}" class="d-block w-100 gallery" alt="${String(i)}th image of ${data.data.GeneralInfo.ProductName}"></div>`
}
document.getElementById("product-name").innerHTML = data.data.GeneralInfo.ProductName
document.getElementById("contents").innerHTML = data.data.GeneralInfo.Description.LongDesc