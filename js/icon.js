const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')


let number = 1
let randNum = Math.random() * 50
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * 50
    total = Math.ceil(total)
    picture.src = "images/little.png"
})
const images = []
