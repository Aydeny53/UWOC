const picture = document.querySelector('.picture')
const btn = document.querySelector('.btn')
const random = document.querySelector('.random')

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

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
    },
    {
        image: 'images/watching.jpg',
    },
    {
        image: 'images/Society.webp',
    },
    {
        image: 'images/Autograph.jpg',
    },
]

makePicture()
makeBtn()



btn.addEventListener('click', ()=> {
    randNum = Math.random() * table.length
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none"){
        stopper = stopper + 1
        randNum = Math.random() * table.length
        total = Math.floor(randNum)
        console.log(stopper)
        if (stopper > 100){
            break
            stopLoop = stopLoop - 1000
        }
    }

    stopper = -10

    holder = total


    console.log(total)

    if (table[total].image != "none"){
        picture.src = `${table[total].image}`
        table[total].image = "none"
    }
    else {
        picture.src = "images/Sorry.png"
    }
})

function makePicture(){
    let pictureWidth = 250
    let pictureHeight = 250
    picture.style.width = `${pictureWidth}px`
    picture.style.height = `${pictureHeight}px`
    picture.style.left = `${windowWidth/2 - pictureWidth/2}px`
    picture.style.top = `${windowHeight/2 - pictureHeight/2 * (3/2)}px`
}
function makeBtn(){
    let btnWidth = 105
    btn.style.width = `${btnWidth}px`
    btn.style.left = `${windowWidth/2 - btnWidth/2}px`
}

function makeText(){
    random.style.position = 'absolute'
    // let randomTop = `${windowHeight/2 - 0/2 * (3/2) - 100}`
    // random.style.top = `${randomTop}px`
    // let randomLeft = `${windowWidth/2 - 1/2}`
    // random.style.left = `${randomLeft}px`
    random.style.left = '200px'

}
