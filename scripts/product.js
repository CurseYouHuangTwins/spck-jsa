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
  document.getElementById("product-indicator").innerHTML += `<button type="button" data-bs-target="#carouselStacked" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
}
for (var i of data.data.FeatureLogos) {
  document.getElementById("badges").innerHTML += `<img src="${i.LogoPic}" alt="Badges" class="badge-product" data-bs-toggle="dialog" data-bs-target="#exampleDialog" onclick="document.getElementById('dialog-title').innerHTML='${i.Value}';document.getElementById('dialog-badges').innerHTML='${i.Description.Value}'">`
}
for (let groupIndex = 0; groupIndex < data.data.FeaturesGroups.length; groupIndex++) {
  const group = data.data.FeaturesGroups[groupIndex];
  const tabId = `spec-tab-${groupIndex}`;
  const paneId = `spec-pane-${groupIndex}`;
  const isActive = groupIndex === 0;

  document.getElementById('myTab').innerHTML += `<li class="nav-item" role="presentation">
    <button class="nav-link${isActive ? ' active' : ''}" id="${tabId}" data-bs-toggle="tab" data-bs-target="#${paneId}" type="button" role="tab" aria-controls="${paneId}" aria-selected="${isActive}">${group.FeatureGroup.Name.Value}</button>
  </li>`;

  let newInner = `<div class="tab-pane fade${isActive ? ' show active' : ''}" id="${paneId}" role="tabpanel" aria-labelledby="${tabId}" tabindex="0">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">`;
  for (const feature of group.Features) {
    newInner += `<div class="col">
  <div class="card h-100 spec-feature-card">
    <div class="card-body">
      <h4 class="card-title">${feature.Feature.Name.Value}</h4>
      <p class="card-subtitle fg-3">${feature.Description}</p>
      <p class="card-text">${feature.PresentationValue}</p>
    </div>
  </div>
</div>`;
  }
  newInner += '</div></div>';
  document.getElementById('myTabContent').innerHTML += newInner;
}

const specTabs = document.getElementById('myTab');
const specTabsScrollbar = document.getElementById('specTabsScrollbar');
const specTabsScrollbarThumb = document.getElementById('specTabsScrollbarThumb');
let scrollbarDragStartX = 0;
let scrollbarDragStartScroll = 0;
let isDraggingScrollbar = false;

function updateSpecTabsScrollbar() {
  const maxScroll = specTabs.scrollWidth - specTabs.clientWidth;
  specTabsScrollbar.hidden = maxScroll <= 0;
  if (specTabsScrollbar.hidden) return;

  const trackWidth = specTabsScrollbar.clientWidth;
  const thumbWidth = Math.min(trackWidth, Math.max(
    32,
    trackWidth * (specTabs.clientWidth / specTabs.scrollWidth)
  ));
  const thumbTravel = trackWidth - thumbWidth;
  const scrollRatio = specTabs.scrollLeft / maxScroll;

  specTabsScrollbarThumb.style.width = `${thumbWidth}px`;
  specTabsScrollbarThumb.style.transform = `translateX(${scrollRatio * thumbTravel}px)`;
  specTabsScrollbar.setAttribute('aria-valuenow', String(Math.round(scrollRatio * 100)));
}

specTabs.addEventListener('scroll', updateSpecTabsScrollbar);
window.addEventListener('resize', updateSpecTabsScrollbar);
specTabsScrollbar.addEventListener('pointerdown', (event) => {
  const maxScroll = specTabs.scrollWidth - specTabs.clientWidth;
  if (maxScroll <= 0) return;

  if (event.target === specTabsScrollbarThumb) {
    isDraggingScrollbar = true;
    scrollbarDragStartX = event.clientX;
    scrollbarDragStartScroll = specTabs.scrollLeft;
    specTabsScrollbar.setPointerCapture(event.pointerId);
    event.preventDefault();
    return;
  }

  const track = specTabsScrollbar.getBoundingClientRect();
  const thumb = specTabsScrollbarThumb.getBoundingClientRect();
  const thumbTravel = specTabsScrollbar.clientWidth - thumb.width;
  if (thumbTravel <= 0) return;
  const thumbOffset = Math.max(0, Math.min(
    thumbTravel,
    event.clientX - track.left - thumb.width / 2
  ));
  specTabs.scrollLeft = (thumbOffset / thumbTravel) * maxScroll;
});
specTabsScrollbar.addEventListener('pointermove', (event) => {
  if (!isDraggingScrollbar) return;

  const maxScroll = specTabs.scrollWidth - specTabs.clientWidth;
  const thumbTravel = specTabsScrollbar.clientWidth - specTabsScrollbarThumb.offsetWidth;
  if (thumbTravel > 0) {
    specTabs.scrollLeft = scrollbarDragStartScroll
      + ((event.clientX - scrollbarDragStartX) / thumbTravel) * maxScroll;
  }
});
specTabsScrollbar.addEventListener('pointerup', () => {
  isDraggingScrollbar = false;
});
specTabsScrollbar.addEventListener('pointercancel', () => {
  isDraggingScrollbar = false;
});
specTabsScrollbar.addEventListener('keydown', (event) => {
  const pageSize = specTabs.clientWidth;
  switch (event.key) {
    case 'ArrowLeft':
      specTabs.scrollLeft -= 40;
      break;
    case 'ArrowRight':
      specTabs.scrollLeft += 40;
      break;
    case 'PageUp':
      specTabs.scrollLeft -= pageSize;
      break;
    case 'PageDown':
      specTabs.scrollLeft += pageSize;
      break;
    case 'Home':
      specTabs.scrollLeft = 0;
      break;
    case 'End':
      specTabs.scrollLeft = specTabs.scrollWidth;
      break;
    default:
      return;
  }
  event.preventDefault();
});
requestAnimationFrame(updateSpecTabsScrollbar);
document.getElementById("product-name").innerHTML = data.data.GeneralInfo.ProductName
document.getElementById("contents").innerHTML = data.data.GeneralInfo.Description.LongDesc