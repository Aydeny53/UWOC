const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')


let number = 1
let total = 0
let holder =0
let randNum = -1
let stopper = -10
let stopLoop = 0
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
    {
        image: 'images/Milly.png',
    }
]
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * 3
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none" || stopLoop == -100){
        stopper = stopper + 1
        randNum = Math.random() * 3
        total = Math.floor(randNum)
        if (stopper == 100){
            stopLoop = -100
        }
    }
    
    stopper = -10

    holder = total


    console.log(total)

    picture.src = `${table[total].image}`
    table[total].image = "none"
    // picture.src = "images/little.png"
})
const images = []
