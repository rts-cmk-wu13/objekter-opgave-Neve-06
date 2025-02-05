// slå dig løs her... 
let heroElm = document.querySelector(".hero")
let heroDiv = document.createElement("div")
let serviceElm = document.querySelector(".services")


// section hero -------------------
heroElm.classList.add("full-width")
heroElm.innerHTML = `
<img src="${hero.image}" alt="hero-image">
`
heroDiv.innerHTML = `
<h2>${hero.headline}</h2>
<p>${hero.copy}</p>
<button><img src="${hero.icon}" alt="icon"></button>
`
heroElm.append(heroDiv)

// section services -------------------

services.forEach(service =>{
    let serviceFigure = document.createElement("figure");
    serviceFigure.classList.add("figure")
    let serviceHeadline = document.createElement("h2");
    serviceHeadline.textContent = `${service.headline}`
    let serviceInfo = document.createElement("p")
    serviceInfo.textContent = `${service.text}`
    let serviceDiscover = document.createElement("p")
    serviceDiscover.textContent = `${service.linktext}`
    serviceFigure.append(serviceHeadline, serviceInfo, serviceDiscover)
    serviceElm.appendChild(serviceFigure)
})

// section facilities -------------------

// section sites -------------------

// section advantages -------------------



//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

