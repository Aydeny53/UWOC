const container = document.getElementById('container')
const colors = ["#e74c3c", "#3498db", "plum", "e67e22", "#2ecc71"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i = i+1){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', ()=> setColor(square))
    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor(){
    return colors[]
}
