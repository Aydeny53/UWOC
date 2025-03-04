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

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event)=> {
    console.log(event.key) /* Shows what key is being pressed*/

    if (event.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 10
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`
})
