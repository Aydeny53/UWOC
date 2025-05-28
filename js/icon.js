const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')


let number = 1
let total = 0
let randNum = Math.random() * 50
const table = [
    {
        image: 'images/full.png',
        text: "I'm Thirsty"
    },
    {
        image: 'images/keepit.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'images/milly.png',
        text: "I'm Thirsty"
    }
]
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * 50
    total = Math.ceil(total)
    picture.src = "images/little.png"
})
const images = []
