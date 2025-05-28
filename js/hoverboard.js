const container = document.getElementById('container')
const colors = ["#e74c3c", "#3498db", "plum", "e67e22", "#2ecc71"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i = i+1){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
}
