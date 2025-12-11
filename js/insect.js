const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const score = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 00
let minutes = 00
let score2 = 0
let amount = 0
let current = 0
let selected_insect = {}

start_btn.addEventListener('click', ()=> {
    screens[0].classList.add('up')
})


choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        screens[1].classList.add('up')
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        startGame()
        createInsect()


    })
})








function startGame() {
    setInterval(increaseTime, 1000)
}


function increaseTime() {
    let s = seconds % 60
    let m = Math.floor (seconds / 60)
    if (s < 10) {
        s = `0${s}`
    }
    if (m < 10) {
        m = `0${m}`
    }
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds = seconds + 1
}



function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}">`
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    game_container.appendChild(insect)
    insect.addEventListener('click', ()=> {
        // determineAmount()
        catchInsect()
        // increaseScore()
    })



}

function catchInsect() {
    let insect = event.target;
    increaseScore()

    insect.classList.add('caught')
    // game_container.removeChild(insect)
    setTimeout ( ()=> insect.remove(), 200)
    addInsect()
}

function determineAmount() {
    amount = Math.floor(amount + .5)
    catchInsect()
}

function addInsect() {
    // while (amount > current) {

        setTimeout(createInsect, 200)
        setTimeout(createInsect, 200)
    //     current = current + 1;
    // }
}

function increaseScore() {
    score2 = score2 + 1
    score.innerHTML = `Score: ${score2}`
    if (score2 == 10){
        message.classList.add('visible')
    }
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    console.log(Math.random())
    const x = Math.random() * (width-200) + 100
    const y = Math.random() * (height-200) + 100
    return {x, y}

}
