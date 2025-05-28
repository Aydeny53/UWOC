
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
let clear = 0
const table = [
    {
        image: 'imagesCART/amTrack.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/americanExpress.gif',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/audi.gif',
        imageShow: 'images/estupido.png'
    },
    {
        image: 'imagesCART/bMW.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/boyScoutsOfAmerica.gif',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/canon.jpg',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/adidas.gif',
        imageShow: 'images/Dreams.jpg'
    },
    {
        image: 'imagesCART/CART.jpg',
        imageShow: 'images/littleDude2.png'
    },
    {
        image: 'imagesCART/champion.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/chase.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/citiBank.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/comedyCentral.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/converse.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/disneyPlus.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/dolbySystems.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/dollarTree.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/dominoes.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/drPepper.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/fireStone.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/goodYear.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/gucci.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/hydroFlask.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/ihop.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/infinity.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/jurassicPark.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/KansasCityChiefs.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/levis.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/Logitech.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/modPizza.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/mtnDew.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/nespresso.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/netGear.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/northFace.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/norton.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/overWatch.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/paramount.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/photoShop.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/playStation.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/postIt.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/powerAde.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/rayBans.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/rolex.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/roxy.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/SAAB.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/southWestAirlines.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/Spotify.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/texasInstruments.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/timberLand.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/underArmor.gif',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/UPS.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/usPostOffice.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/volvo.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/vW.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/whatsApp.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/worldWildLife.jpg',
        imageShow: 'imagesCART2/'
    },
    {
        image: 'imagesCART/yelp.jpg',
        imageShow: 'imagesCART2/'
    },
]

makePicture()
makeBtn()
makeText()


let remaining = 0

btn.addEventListener('click', ()=> {
    clear = 0

    pictureShow.style.opacity = '0'
    randNum = Math.random() * table.length
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none"){
        remaining = 0
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
    table.forEach(count)
    if (remaining == table.length - 1){

    }
    pictureShow.src = "imagesCART/Placeholder.png"
})

// ******

btnShow.addEventListener('click', ()=> {
    pictureShow.src = table[total].imageShow
    if (clear == 0){
        pictureShow.style.opacity = 1
        clear = 1
    }
    else{
        pictureShow.style.opacity = 0
        clear = 0
    }

})


function makePicture(){
    let pictureWidth = 400
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
    btn.style.top = `${windowHeight/2 + 100/2 * (3/2)}px`

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

function count(){
    if (table[total].image == "none"){
        remaining = remaining + 1
    }
    console.log(remaining)
}
