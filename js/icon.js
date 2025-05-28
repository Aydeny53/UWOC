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
        image: 'images/DragonetTired1.png',
        text: "I'm Thirsty"
    },
    {
        image: 'images/Milly.png',

    },
    {
        image: 'images/car1.jpg',
    }
]
console.log(randNum)

btn.addEventListener('click', ()=> {
    randNum = Math.random() * table.length
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none" || stopLoop < -100){
        stopper = stopper + 1
        randNum = Math.random() * 3
        total = Math.floor(randNum)
        console.log(randNum)
        if (stopper > 20){
            stopLoop = stopLoop - 1000
            picture.src = "images/Sorry.png"
            // if (stopLoop == -100){
            //     picture.src = "images/Sorry.png"
            // }
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
