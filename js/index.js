// slå dig løs her... 
let heroElm = document.querySelector(".hero")
let heroDiv = document.createElement("div")
let serviceElm = document.querySelector(".services")
let facilitiesElm = document.querySelector(".facilities")

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
    let serviceDiv = document.createElement("div")
    serviceDiv.classList.add("service__div")
    let serviceFigure = document.createElement("figure");
    serviceFigure.classList.add("service__figure")
    serviceFigure.innerHTML = `<img src="${service.illustration}">`
    let serviceHeadline = document.createElement("h2");
    serviceHeadline.textContent = `${service.headline}`
    let serviceInfo = document.createElement("p")
    serviceInfo.classList.add("service__text")
    serviceInfo.textContent = `${service.text}`
    let serviceDiscover = document.createElement("p")
    serviceDiscover.classList.add("service__link-text")
    serviceDiscover.textContent = `${service.linktext}`
    serviceFigure.append(serviceHeadline, serviceInfo, serviceDiscover)
    serviceDiv.append(serviceFigure)
    serviceElm.appendChild(serviceDiv)
})

// section facilities -------------------



facilities.options.forEach(option =>{
    let facilitiesDiv = document.createElement("div");
    facilitiesDiv.classList.add("facility__div");
    let facilitiesIcon = document.createElement("img");
    facilitiesIcon.innerHTML = `<img src="${option.icon}">`
    facilitiesIcon.classList.add("facilities__img")
    let facilitiesHeadlineSmall = document.createElement("h2");
    facilitiesHeadlineSmall.classList.add("facilities__headline-small")
    facilitiesHeadlineSmall.textContent = `${option.headline}`
    let facilitiesText = document.createElement("p");
    facilitiesText.textContent = `${option.text}`
    facilitiesText.classList.add("facility__text")
    facilitiesDiv.append(facilitiesIcon, facilitiesHeadlineSmall, facilitiesText)
    facilitiesElm.appendChild(facilitiesDiv)
})


// section sites -------------------

// section advantages -------------------



//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

