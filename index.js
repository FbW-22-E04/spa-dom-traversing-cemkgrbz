const h1 = document.querySelector("h1");
const closestHeader = h1.closest("header");
closestHeader.style.border = "5px solid green";

const packageTitles = document.querySelectorAll(".package-title");
packageTitles.forEach(item => item.previousElementSibling.style.border = "3px solid black")

const label = document.querySelectorAll("label")

for(const item of label) {
    if(item.matches(".mild")) {
        item.style.borderBottom = "3px solid yellow"
    } else if (item.matches(".intense")) {
        item.style.borderBottom = "3px solid orange"
    } else {
        item.style.borderBottom = "3px solid red"
    }
}


// const navList = document.querySelector('.nav-list')
// const siteMap = document.querySelector('.site-map')

// Array.from(navList.children).forEach(item => siteMap.appendChild(item))

const navList = document.querySelector(".nav-list");
const navListClone = navList.cloneNode(true);
const siteMap = document.querySelector(".site-map")

Array.from(navListClone.children).forEach(item => siteMap.appendChild(item))