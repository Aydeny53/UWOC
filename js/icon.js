
const picture = document.querySelector('.picture')
const pictureShow = document.querySelector('.pictureShow')
const pictureHint = document.querySelector('.pictureHint')
const btn = document.querySelector('.btn')
const btnShow = document.querySelector(`.btnShow`)
const random = document.querySelector('.random')


const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

pictureShow.style.opacity = 0
pictureHint.style.opacity = 0

let number = 1
let total = 0
let holder =0
let randNum = -1
let stopper = -10
let clear = 0

let pictureEnd = 50
const table = [
    {
        image: 'imagesCART/americanExpress.png',
        imageShow: 'imagesCARTshow/american_express_logo.png',
        hint: "This is a financial service in the U.S."
    },
    {
        image: 'imagesCART/boyScoutsOfAmerica.gif',
        imageShow: 'imagesCARTshow/boy_scouts_of_america_logo.png',
        hint: "Boy scouts, but from what country?"
    },
    {
        image: 'imagesCART/adidas.gif',
        imageShow: 'imagesCARTshow/adidas_logo.png',
        hint: "Someone here is probably wearing something from this company"
    },
    {
        image: 'imagesCART/champion.jpg',
        imageShow: 'imagesCARTshow/champion_logo.png',
        hint: "This one makes things for sports!"
    },
    {
        image: 'imagesCART/chase.gif',
        imageShow: 'imagesCARTshow/chase_logo.jpg',
        hint: "A bank. That's all you get, come on..."
    },
    {
        image: 'imagesCART/citiBank.gif',
        imageShow: 'imagesCARTshow/citibank_logo.png',
        hint: "It's a bank. That's all you get"
    },
    {
        image: 'imagesCART/comedyCentral.gif',
        imageShow: 'imagesCARTshow/comedy_central_logo.png',
        hint: "This is a television channel!"
    },
    {
        image: 'imagesCART/converse.jpg',
        imageShow: 'imagesCARTshow/converse_logo.png',
        hint: "This one sells shoes!"
    },
    {
        image: 'imagesCART/dolbySystems.gif',
        imageShow: 'imagesCARTshow/dolby_logo.png',
        hint: "Tech company that deals with audio and visual tech!"
    },
    {
        image: 'imagesCART/dollarTree.jpg',
        imageShow: 'imagesCARTshow/dollar_tree_logo.jpg',
        hint: "A dollar a day"
    },
    {
        image: 'imagesCART/fireStone.jpg',
        imageShow: 'imagesCARTshow/firestone_logo.png',
        hint: "A maintenance company for automobiles!"
    },
    {
        image: 'imagesCART/goodYear.jpg',
        imageShow: 'imagesCARTshow/goodyear_logo.jpg',
        hint: "This company serves in the automobile industry, but mainly sells tires!"
    },
    {
        image: 'imagesCART/ihop.gif',
        imageShow: 'imagesCARTshow/ihop_logo.png',
        hint: "A place you would go for breakfast"
    },
    {
        image: 'imagesCART/KansasCityChiefs.jpg',
        imageShow: 'imagesCARTshow/kansas_city_chiefs_logo.png',
        hint: "A sports team. Specifically one that plays football!"
    },
    {
        image: 'imagesCART/levis.gif',
        imageShow: 'imagesCARTshow/levis_logo.png',
        hint: "A clothing company! Someone here might be wearing these..."
    },
    {
        image: 'imagesCART/Logitech.jpg',
        imageShow: 'imagesCARTshow/logitech_logo.jpg',
        hint: "This one creates things related to tech such as computers."
    },
    {
        image: 'imagesCART/mtnDew.gif',
        imageShow: 'imagesCARTshow/mtn_dew_logo.png',
        hint: "A pretty popular and well-known soda."
    },
    {
        image: 'imagesCART/nespresso.gif',
        imageShow: 'imagesCARTshow/nespresso_logo.png',
        hint: "Coffee coffee"
    },
    {
        image: 'imagesCART/northFace.gif',
        imageShow: 'imagesCARTshow/north_face_logo.png',
        hint: "This company creates equipment for outdoor wear."
    },
    {
        image: 'imagesCART/norton.gif',
        imageShow: 'imagesCARTshow/norton_logo.png',
        hint: "A cybersecurity company that deals with online privacy"
    },
    {
        image: 'imagesCART/paramount.gif',
        imageShow: 'imagesCARTshow/paramount_logo.jpg',
        hint: "An entertainment company that focuses on film and television production."
    },
    {
        image: 'imagesCART/playStation.gif',
        imageShow: 'imagesCARTshow/playstation_logo.png',
        hint: "Xbox doesn't like him"
    },
    {
        image: 'imagesCART/postIt.gif',
        imageShow: 'imagesCARTshow/post-it_logo.png',
        hint: "Take notes guys, take notes."
    },
    // {
    //     image: 'imagesCART/roxy.gif',
    //     imageShow: 'imagesCARTshow/roxy_logo.png',
    //     hint: "This is a medicinal company that helps in pain relief."
    // },
    {
        image: 'imagesCART/SAAB.jpg',
        imageShow: 'imagesCARTshow/saab_logo.jpg',
        hint: "Automobile company that manufactures cars. Uhh, these guys went bankrupt"
    },
    {
        image: 'imagesCART/southWestAirlines.gif',
        imageShow: 'imagesCARTshow/southwest_airlines_logo.png',
        hint: "An airlines company."
    },
    {
        image: 'imagesCART/Spotify.jpg',
        imageShow: 'imagesCARTshow/spotify_logo.png',
        hint: "You listen to music. You got this."
    },
    {
        image: 'imagesCART/texasInstruments.gif',
        imageShow: 'imagesCARTshow/texas_instruments_logo.png',
        hint: "Designs processing chips, apparently. Not instruments :("
    },
    {
        image: 'imagesCART/timberLand.jpg',
        imageShow: 'imagesCARTshow/timberland_logo.png',
        hint: "Creates boots for logging and construction"
    },
    {
        image: 'imagesCART/underArmor.gif',
        imageShow: 'imagesCARTshow/under_armour_logo.png',
        hint: "Creates performance clothing and accessories."
    },
    {
        image: 'imagesCART/usPostOffice.jpg',
        imageShow: 'imagesCARTshow/united_states_postal_service_logo.png',
        hint: "A postal service. That's all you need I hope."
    },
    {
        image: 'imagesCART/volvo.jpg',
        imageShow: 'imagesCARTshow/volvo_logo.png',
        hint: "This company sells automobiles"
    },
    {
        image: 'imagesCART/worldWildLife.jpg',
        imageShow: 'imagesCARTshow/world_wildlife_fund_logo.png',
        hint: "THIS IS NOT PANDA EXPRESS!!! Think of the environment."
    },
    {
        image: 'imagesCART/yelp.jpg',
        imageShow: 'imagesCARTshow/yelp_logo.png',
        hint: "A platform to connect people with businesses. Please don't leave a one star review :("
    }
]

makePicture()
makeBtn()
makeText()


let remaining = 0

btn.addEventListener('click', ()=> {
    clear = 0
    pictureHint.style.opacity = "0"
    pictureShow.style.opacity = '0'
    randNum = Math.random() * table.length
    total = Math.floor(randNum)

    while (holder == total || table[total].image == "none"){
        remaining = 0
        stopper = stopper + 1
        randNum = Math.random() * table.length
        total = Math.floor(randNum)
        console.log(total)

        if (stopper > 100){
            break
        }
    }

    stopper = -10

    holder = total



    if (table[total].image != "none"){
        picture.src = `${table[total].image}`
        table[total].image = "none"
    }
    else {
        picture.src = "imagesCART/Sorry.png"
        pictureEnd = pictureEnd + 100
        console.log(pictureEnd)
    }
    // table.forEach(count) // This is SUPPOSED to make it so it'll tell you if you're at the end.
    // if (remaining == table.length - 1){

    // }
    pictureShow.src = "imagesCART/Placeholder.png"
})

// ******

btnShow.addEventListener('click', ()=> {
    pictureShow.src = table[total].imageShow

    let test = 0

    if (clear == 0){
        pictureShow.style.opacity = 1
        clear = 1
    }
    else{
        pictureShow.style.opacity = 0
        clear = 0
    }
    console.log(pictureEnd)
    if (pictureEnd >= 100){
        pictureShow.src = "imagesCART/refresh.png"
        test = 100
    }
    console.log(test)

})

random.addEventListener('click', ()=> {
    pictureHint.innerHTML = table[total].hint
    pictureHint.style.opacity = "1"

})

function makePicture(){
    // let pictureWidth = `${windowWidth/2}`
    // let pictureHeight = `${windowHeight/2}`
    let pictureWidth = 550
    let pictureHeight = 350
    picture.style.width = `${pictureWidth}px`
    picture.style.height = `${pictureHeight}px`
    picture.style.left = `${windowWidth/2 - pictureWidth/2}px`
    picture.style.top = `${windowHeight/2 - pictureHeight - 20}px`

    // let pictureShowWidth = `${windowWidth/2}`
    // let pictureShowHeight = `${windowHeight/2}`
    let pictureShowWidth = 550
    let pictureShowHeight = 350
    pictureShow.style.width = `${pictureShowWidth}px`
    pictureShow.style.height = `${pictureShowHeight}px`
    pictureShow.style.left = `${windowWidth/2 - pictureWidth/2}px`
    pictureShow.style.bottom = '5px'
    // pictureShow.style.bottom = `${windowHeight/2 - pictureHeight/2 * (3/2)}px`


    let btnWidth = 105
    let btnHeight = 50
    btn.style.width = `${btnWidth}px`
    btn.style.height = `${btnHeight}px`
    btn.style.right = `${windowWidth/2 - btnWidth/2}px`
    btn.style.top = `${windowHeight/2 -12}px`
    btn.style.zIndex = '100'
    btnShow.style.zindex = '100'
    btnShow.style.top = `${windowHeight/2}px`
}
function makeBtn(){
    // let btnWidth = 105
    // let btnHeight = 50
    // btn.style.width = `${btnWidth}px`
    // btn.style.height = `${btnHeight}px`
    // btn.style.right = `${windowWidth/2 - btnWidth/2}px`
    // btn.style.top = `${windowHeight/2 - pictureHeight}px`
    // btn.style.zIndex = '100'
    // btnShow.style.zindex = '100'

}

function makeText(){
    random.style.position = 'relative'
    // let randomTop = `${windowHeight/2 - 0/2 * (3/2) - 100}`
    // random.style.top = `${randomTop}px`
    // let randomLeft = `${windowWidth/2 - 1/2}`
    // random.style.left = `${randomLeft}px`
    random.style.top = `${windowHeight/2 - 250/2 * (3/2) -100}px`
    random.style.textAlign = 'center'
    random.style.color = 'rgba(255,255,255,1)'
    random.style.backgroundColor = ""

}

// function count(){
//     if (table[total].image == "none"){
//         remaining = remaining + 1
//     }
//     console.log(remaining)
// }
