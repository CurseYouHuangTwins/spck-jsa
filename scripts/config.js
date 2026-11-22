const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../css/style.css';

document.head.appendChild(link);
document.head.innerHTML += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">'
document.body.innerHTML += '<script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>'

export const MAIN_API_KEY = "bdb9b375-2a0d-46e5-b324-6d114f007e7b"
export const CONTENT_API_KEY = "11c4c4a5-40a6-4ae7-8f7d-fb262acd5ac8"
export const DATABASE_API_KEY = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTQ3MDY2ODQsImlkIjoiMDFhMWRjZGEtMjAwMS03M2Q2LWJjYmEtYTM3MWYwNTkyMjUzIiwia2lkIjoiYVZuXzAwdU9pSEc4a2dWemZHOEprblhWeE1tZ3pnT0FsdVdBWDV0Q3phbyIsInJpZCI6ImJjNWQxMTgxLTAzZDItNDJjNi04ZDhmLTQ5MjMwNmRlMWU4MyJ9.ncs2X6RgxCQ4Swhog2BBOQfXpscvtskvTcUhz-1AErxvVfUEYFzrjDnCtmQ8Vpgcpg7jlAf7T9NHYfgfCb3PDQ"