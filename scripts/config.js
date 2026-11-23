const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../css/style.css';

document.head.appendChild(link);
document.head.innerHTML += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">'
document.body.innerHTML = `<nav class="navbar md:navbar-expand bg-1">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog class="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body mb-2 md:mb-0">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form class="hstack gap-2" role="search" action="search.html">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" >
          <button class="btn-outline theme-success" type="submit">Search</button>
        </form>
      </div>
    </dialog>
  </div>
</nav>` + document.body.innerHTML
document.body.innerHTML += '<div class="container"><footer class="py-3 my-4"><ul class="nav justify-content-center border-bottom pb-3 mb-3"><li class="nav-item"><a href="index.html" class="nav-link px-2 fg-2">Home</a></li><li class="nav-item"><a href="#" class="nav-link px-2 fg-2">Features</a></li><li class="nav-item"><a href="#" class="nav-link px-2 fg-2">Pricing</a></li><li class="nav-item"><a href="#" class="nav-link px-2 fg-2">FAQs</a></li><li class="nav-item"><a href="#" class="nav-link px-2 fg-2">About</a></li></ul><p class="text-center fg-2">Credits to Icecat for providing listing details</p></footer></div>'

const bootstrapScript = document.createElement('script');
bootstrapScript.type = 'module';
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js';
bootstrapScript.crossOrigin = 'anonymous';
document.body.appendChild(bootstrapScript);

export const MAIN_API_KEY = "bdb9b375-2a0d-46e5-b324-6d114f007e7b"
export const CONTENT_API_KEY = "11c4c4a5-40a6-4ae7-8f7d-fb262acd5ac8"
export const DATABASE_API_KEY = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTQ3MDY2ODQsImlkIjoiMDFhMWRjZGEtMjAwMS03M2Q2LWJjYmEtYTM3MWYwNTkyMjUzIiwia2lkIjoiYVZuXzAwdU9pSEc4a2dWemZHOEprblhWeE1tZ3pnT0FsdVdBWDV0Q3phbyIsInJpZCI6ImJjNWQxMTgxLTAzZDItNDJjNi04ZDhmLTQ5MjMwNmRlMWU4MyJ9.ncs2X6RgxCQ4Swhog2BBOQfXpscvtskvTcUhz-1AErxvVfUEYFzrjDnCtmQ8Vpgcpg7jlAf7T9NHYfgfCb3PDQ"