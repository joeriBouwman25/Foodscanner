const elementsToFlip = document.querySelectorAll("section:nth-of-type(2) article, nav")

function flipElement(){
    this.classList.toggle("turnAround")
}

for (let i = 0; i < elementsToFlip.length; i++) {
    elementsToFlip[i].addEventListener("click", flipElement);
}