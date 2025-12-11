const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')

element1.addEventListener('click', ()=> {
    element1.innerHTML = "I've been clicked! <br> Try doubling clicking me!"
})

element1.addEventListener('dblclick', ()=> {
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me!"
})



element2.addEventListener('mouseover', ()=> {
    element2.style.color = "green"
    element2.style.backgroundColor = "purple"
})

element2.addEventListener('mouseout', ()=> {
    element2.style.color = "white"
    element2.style.backgroundColor = "powderblue"
})

let positionY = 3; /*537*/
let positionX = 0;

document.addEventListener('keydown', (event)=> {
    console.log(event.key) /* Shows what key is being pressed*/

    if (event.key == 'ArrowDown') {
        positionY = positionY - 5
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY + 5
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 5
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 5
    }
    if (positionY < 5) {
        positionY = 5
    }
    if (positionX < 0) {
        positionX = 0
    }
    element3.style.bottom = `${positionY}%`
    element3.style.right = `${positionX}%`
})


element4.addEventListener('click', ()=> {
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element4.style.opacity = .3
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'j') {
        element4.style.width = "300px"
        element4.style.height = "50px"
        element4.innerHTML = "<h4>Click Me to make me small <br>Press the Letter 'J' to bring me back!</h4>"
        element4.style.opacity = 1
    }
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', ()=> {
    element5.style.animationPlayState = list[index]
    index = (index + 1) % 2 /* Modulo 2*/
})
