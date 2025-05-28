const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')


let number = 1
let total = 0
let holder =0
let randNum = -1
const table = [
    {
        image: 'images/Full.png',
        text: "I'm Thirsty"
    },
    {
        image: 'images/KeepIt.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'images/Milly.png',
        text: "I'm Thirsty"
    }
]
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * 3
    total = Math.floor(randNum)
    while (holder == total){
    randNum = Math.random() * 3
    total = Math.floor(randNum)
    }
    holder = total


    console.log(total)

    picture.src = `${table[total].image}`
    // picture.src = "images/little.png"
})
const images = []
