
const picture = document.querySelector('.picture')
const pictureShow = document.querySelector('.pictureShow')
const btn = document.querySelector('.btn')
const btnShow = document.querySelector(`.btnShow`)
const random = document.querySelector('.random')

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

pictureShow.style.opacity = 0

let number = 1
let total = 0
let holder =0
let randNum = -1
let stopper = -10
const table = [
    {
        image: 'images/Full.png',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/KeepIt.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/DragonetTired1.png',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/Milly.png',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/car1.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/watching.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/Society.webp',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'images/Autograph.jpg',
        imageShow: 'images/littleDude2.png'
    },
]

makePicture()
makeBtn()
makeText()




btn.addEventListener('click', ()=> {
    pictureShow.style.opacity = '0'
    randNum = Math.random() * table.length
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none"){
        stopper = stopper + 1
        randNum = Math.random() * table.length
        total = Math.floor(randNum)
        console.log(stopper)
        if (stopper > 100){
            break
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

// ******
btnShow.addEventListener('click', ()=> {
    pictureShow.src = table[total].imageShow
    pictureShow.classList.toggle('show')
    pictureShow.style.opacity = 1

})


function makePicture(){
    let pictureWidth = 250
    let pictureHeight = 250
    picture.style.width = `${pictureWidth}px`
    picture.style.height = `${pictureHeight}px`
    picture.style.left = `${windowWidth/2 - pictureWidth/2}px`
    picture.style.top = `${windowHeight/2 - pictureHeight/2 * (3/2)}px`

    let pictureShowWidth = 250
    let pictureShowHeight = 250
    pictureShow.style.width = `${pictureShowWidth}px`
    pictureShow.style.height = `${pictureShowHeight}px`
    pictureShow.style.left = `${windowWidth/2 - pictureWidth/2 - 300}px`
    pictureShow.style.top = `${windowHeight/2 - pictureHeight/2 * (3/2)}px`
}
function makeBtn(){
    let btnWidth = 105
    let btnHeight = 50
    btn.style.width = `${btnWidth}px`
    btn.style.height = `${btnHeight}px`
    btn.style.left = `${windowWidth/2 - btnWidth/2}px`
    btn.style.top = `${windowHeight/2 + 250/2 * (3/2)}px`

}

function makeText(){
    random.style.position = 'relative'
    // let randomTop = `${windowHeight/2 - 0/2 * (3/2) - 100}`
    // random.style.top = `${randomTop}px`
    // let randomLeft = `${windowWidth/2 - 1/2}`
    // random.style.left = `${randomLeft}px`
    random.style.top = `${windowHeight/2 - 250/2 * (3/2) -100}px`
    random.style.textAlign = 'center'

}
