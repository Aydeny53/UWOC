const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')


let number = 1
let total = 0
let randNum = Math.random() * 50
const table = [
    {
        image: 'images/Full.png',
        text: "I'm Thirsty"
    },
    {
        image: 'images/Keepit.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'images/Milly.png',
        text: "I'm Thirsty"
    }
]
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * 2
    total = Math.ceil(randNum)
    console.log(total)
    picture.src = `${table[total].image}`
    // picture.src = "images/little.png"
})
const images = []
