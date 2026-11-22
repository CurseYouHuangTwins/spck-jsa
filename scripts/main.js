import { MAIN_API_KEY } from "./config.js";
import { CONTENT_API_KEY } from "./config.js"; // Both are valid
const response = await fetch("https://live.icecat.biz/api?lang=EN&icecat_id=130198261&UserName=Hung027558&Password=P@$$w0rd2014*", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+MAIN_API_KEY,
    // "api-token": MAIN_API_KEY, // Doesn't work
    // "content-token": CONTENT_API_KEY // Doesn't work
  },
});
const data = await response.json()
console.log(data)