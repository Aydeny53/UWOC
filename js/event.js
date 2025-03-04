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


document.addEventListener('keyup', (event)=> {
    console.log(event.key)
})
