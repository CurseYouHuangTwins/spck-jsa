import { DATABASE_API_KEY } from "./config.js";
var userArray = []
const response_length = await fetch('https://users-logindb.aws-ap-northeast-1.turso.io/v2/pipeline', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${DATABASE_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                requests: [
                // Execute a parameterized SQL command
                {
                    type: "execute",
                    stmt: {
                    sql: "SELECT * FROM users WHERE id = ?",
                    args: [{ type: "integer", value: "1" }], // Values must be strings in JSON
                    },
                },
                // Close the stream
                { type: "close" },
            ],
        }),
    });
const data_length = await response_length.json(); // First shit
for (let i = 0; i < data_length.results.length; i++) {
    const response = await fetch('https://users-logindb.aws-ap-northeast-1.turso.io/v2/pipeline', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${DATABASE_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                requests: [
                // Execute a parameterized SQL command
                {
                    type: "execute",
                    stmt: {
                    sql: "SELECT * FROM users WHERE id = ?",
                    args: [{ type: "integer", value: String(i+1) }], // Values must be strings in JSON
                    },
                },
                // Close the stream
                { type: "close" },
            ],
        }),
    });
    const data = await response.json();
    const rows = data.results[0].response.result.rows
    userArray.push(data.results[0].response.result.rows);
} 
var form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    var chosen = data_length.results.length
    for (var i of userArray) {
        var chosenLen = i[0]
        if (document.getElementById("user").value == chosenLen[1].value) {
            var chosen = i;
        }
    }
    userArray.push([{type: "Number", value:"-1"}, {type: "Text", value: NaN}, {type: "NaN", value: NaN}])
    if (document.getElementById("password").value === chosenLen[2].value) {
        localStorage.setItem("currentUser", JSON.stringify(i));
        document.href = "index.html"
    } else {
        document.getElementById("error_popup").innerHTML = "<p>Incorrect username/password...</p>" // If there was a wrong username, it would guarantee an incorrect password since "NaN" != NaN
    }
})