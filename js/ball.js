const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
const RPaddle = document.createElement('div')
document.body.appendChild(RPaddle)
// const playAgain = document.createElement('button')
// playAgain.innerHTML = "Click Me"
// playAgain.onclick = function(){
//     alert("Hello world")
// }
// document.body.appendChild(playAgain)

const littleDude = document.querySelector('.little1')

// littleDude.src = "../images/littleDude.png"

// document.body.appendChild(littleDude)





const run = false

const time = document.createElement('div')
document.body.appendChild(time)
const score = document.createElement('div')
document.body.appendChild(score)
const level = document.createElement('div')
document.body.appendChild(level)
const life1 = document.createElement('div.lives')
document.body.appendChild(life1)
const life2 = document.createElement('div.lives')
document.body.appendChild(life2)
const life3 = document.createElement('div.lives')
document.body.appendChild(life3)
const gameOver = document.createElement('div')
document.body.appendChild(gameOver)
const gameOverText = document.createElement('div')
document.body.appendChild(gameOverText)

let LPaddleWidth = 15
let LPaddleHeight = 200
let LPaddleSpeed = 20
let LPaddleXPosition = 70
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight/2

let RPaddleWidth = 15
let RPaddleHeight = 150
let RPaddleSpeed = 20
let RPaddleXPosition = 250
let RPaddleYPosition = windowHeight / 2 - RPaddleHeight/2


const littleDudeWidth = windowWidth - (windowWidth - RPaddleXPosition)
const littleDudeHeight = 110
const ballRadius = 20

// let random = Math.random() * 5

// let randomNum = Math.floor(random) + 2
// console.log(randomNum)



let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 10
let ballXDirection = 1
let ballYDirection = 1

let littleDudeYPosition = ballYPosition



let seconds = 1
let hearts = 3

playing = true
let score2 = 0 //Display, and increase score by 1 everytime ball hits paddle
let level2 = 1 //display level, increase level by 1 everytime score increases by 10
// As levels increase, increase ballSpeed
//If ball gets past paddle, end game
//make ball stop/disappear, let user know game is over
//optional: sound effects, background music,





createBall()
createLPaddle()
createRPaddle()
// createTime()
createScore()
createLevel()
createLives()
createEndScreen()
createLittleDude()
// createPlayAgain()
// setInterval(increaseTime, 1000)

if (level2 == '1'){
    var easy = setInterval(littleDudeAnim, 100)
}






sKey = false
wKey = false

document.addEventListener('keydown', (event)=> {
    if (event.key == 'w'){
        wKey = true
    }
    if (event.key == 's'){
        sKey = true
    }
})

document.addEventListener('keyup', (event)=> {
    if (event.key == 'w'){
        wKey = false
    }
    if (event.key == 's'){
        sKey = false
    }
})


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection

    //must be before if statements
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
    moveRPaddle()
    moveLittleDude()




    // if (RPaddleYPosition % '300' > '150' || RPaddleYPosition < 10 ){
    //     littleDude.src = "images/littleDude2.png"
    // }
    // else{
    //     littleDude.src = "images/littleDude.png"
    // }
    // if (RPaddleYPosition >= windowHeight - RPaddleYPosition +155){
    //     littleDude.src = "images/littleDude2.png"
    // }

    if (ballXPosition <= 0 || ballXPosition >= windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition <= 0 || ballYPosition >= windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }

    //Must be after the if statements
    let ballLeft = ballXPosition
    let ballRight = ballXPosition + 2 * ballRadius
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballTop = ballYPosition

    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    let RPaddleTop = RPaddleYPosition
    let RPaddleBottom = RPaddleYPosition + RPaddleHeight
    let RPaddleLeft = RPaddleXPosition - RPaddleWidth
    if (ballLeft - 1 <= '0'){
        endGame()
    }


    if ((ballBottom >= LPaddleTop) && (ballTop <= LPaddleBottom) && (ballLeft <= LPaddleRight) && (ballXDirection == -1)) {
        ballXDirection = ballXDirection * -1

        if (score2 == 10){

            score2 = 0

            ballSpeed = ballSpeed + (level2 * 2)
            increaseLevel()
            LPaddleHeight = LPaddleHeight - 35 // IT DOESNT SHRINK THE VIEW MODEL MAYBE CALL FUNCTION AGAIN??????
            LPaddle.remove()
            document.body.appendChild(LPaddle)
            createLPaddle() // I did it

            if (level2 == '2'){
                clearInterval(easy)
                var mid = setInterval(littleDudeAnim, 50)
            }
            else if (level2 == '3'){
                clearInterval(mid)
                var high = setInterval(littleDudeAnim, 35)
            }

        }
        increaseScore()

    }
    if(level2 < 5){
        if ((ballBottom >= RPaddleTop) && (ballTop <= RPaddleBottom) &&
            (ballRight >=  windowWidth - (RPaddleLeft + RPaddleWidth * 2)) && (ballXDirection == 1)) {
            ballXDirection = ballXDirection * -1
        }
    }



}




function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "purple"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px` //MAKES IT ACTUALLY CENTERED
    ball.style.overflow = 'hidden'
}


function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
    LPaddle.style.overflow = 'hidden'
}

function createRPaddle(){
    RPaddle.style.height = `${RPaddleHeight}px`
    RPaddle.style.width = `${RPaddleWidth}px`
    RPaddle.style.backgroundColor = 'blue'
    RPaddle.style.position = 'absolute'
    RPaddle.style.right = `${RPaddleXPosition}px`
    RPaddle.style.top = `${RPaddleYPosition}px`
    RPaddle.style.overflow = 'hidden'
    RPaddle.style.transition = "ease .1s"
}


function createTime() {
    let timeSize = 80
    time.style.position = 'absolute'
    time.style.width = `${timeSize}px`
    time.style.left = `${windowWidth-timeSize* 4}px`
    time.style.top = '40px'
    time.style.color = 'black'
    time.style.fontSize = '50px'
    time.innerHTML = "Time:00:00"
}

function createScore(){
    let scoreSize = 80
    score.style.position = 'absolute'
    score.style.width = `${scoreSize}px`
    // score.style.left = `${windowWidth/2 - scoreSize}px`
    score.style.right = `${windowWidth-scoreSize * 2}px`
    score.style.top = '150px'
    score.style.color = 'black'
    score.innerHTML = "Score:0"
    score.style.fontSize = '30px'
}

function createLevel(){
    let levelSize = 80
    level.style.position = 'absolute'
    level.style.width = `${levelSize}px`
    // score.style.left = `${windowWidth/2 - scoreSize}px`
    level.style.right = `${windowWidth-levelSize * 2}px`
    level.style.top = '40px'
    level.style.color = 'black'
    level.innerHTML = "Level:1"
    level.style.fontSize = '80px'
}
function createLives(){
    let life1Width = 30
    let life1Height = 30

    let life2Width = 30
    let life2Height = 30

    let life3Width = 30
    let life3Height = 30
    life1.style.position = 'absolute'
    life2.style.position = 'absolute'
    life3.style.position = 'absolute'

    life1.style.width = `${life1Width}px`
    life1.style.height = `${life1Height}px`
    life1.style.backgroundColor = "Red"
    life1.style.left = `${windowWidth/2 -life1Width}px`
    life1.style.bottom = '20px'
    life1.style.transition = "ease 1s"

    life2.style.width = `${life2Width}px`
    life2.style.height = `${life2Height}px`
    life2.style.backgroundColor = "Red"
    life2.style.left = `${windowWidth/2 -life2Width - 45}px`
    life2.style.bottom = '20px'
    life2.style.transition = "ease 1s"

    life3.style.width = `${life3Width}px`
    life3.style.height = `${life3Height}px`
    life3.style.backgroundColor = "Red"
    life3.style.left = `${windowWidth/2 -life3Width + 45}px`
    life3.style.bottom = '20px'
    life3.style.transition = "ease 1s"

}

// function createPlayAgain(){
//     playAgain.style.position = 'absolute'
//     playAgain.style.opacity = 0
//     playAgain.style.height = '100px'
//     playAgain.style.width = '200px'
//     playAgain.style.left = 50%
// }


function endGame(){
    hearts = hearts - 1
    if (hearts == 2){
        life2.style.backgroundColor = "#661313"
    }
    if (hearts == 1){
        life1.style.backgroundColor = "#661313"
    }
    if (hearts == 0){
        life3.style.backgroundColor = "#661313"
        gameOver.style.zIndex = "100"
        gameOver.style.opacity = "0.7"

        gameOverText.style.opacity = "1"
        gameOverText.style.zIndex = "101"
        // ballSpeed = 0
        // LPaddleSpeed = 0
        playing = false

    }

}



function movePaddle(){
    if (wKey == true && LPaddleYPosition > 0 ) {
        LPaddleYPosition = LPaddleYPosition -LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight - 3.5){
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

let randomNum = Math.floor(Math.random() * 2) + 8
function moveRPaddle(){

    if (level2 < 5){
        if(RPaddleYPosition >= 0){
            RPaddleYPosition = ballYPosition - RPaddleSpeed * 3
        }

        if( RPaddleYPosition < 0){
            RPaddleYPosition = 1
        }
    }

    // let random = Math.random() * 10
    // let randomNum = Math.floor(random) + 2

    console.log(randomNum)


    if (level2 == '4' && score2 == randomNum){ //THIS IS SUPPOSED TO MAKE IT WINNABLE
        console.log("Inside statement")
        console.log(randomNum)
        ballSpeed = 4
        RPaddleYPosition = Math.floor(Math.random() * windowHeight + 50)
        RPaddleHeight = RPaddleHeight - 1
        RPaddle.remove()
        document.body.appendChild(RPaddle)
        createRPaddle()

        // if(RPaddleYPosition >= 0){
        //     RPaddleYPosition = ballYPosition - RPaddleSpeed * 3
        // }

        if( RPaddleYPosition < 0){
            RPaddleYPosition = 1
        }


    }
        if (RPaddleYPosition + RPaddleHeight > windowHeight){
        RPaddleYPosition = windowHeight - RPaddleHeight
    }

    if (RPaddleHeight <= 0){
        level2 = 5

    }

    if (ballXPosition >= windowWidth - ballRadius*3 - 5){
        ballSpeed = 0
        playing = false
        clearInterval(easy)
    }
    RPaddle.style.top = `${RPaddleYPosition}px`
}
let something = 1
function moveLittleDude(){
    if (level2 < 5){
        littleDudeYPosition = RPaddleYPosition + RPaddleHeight/4
    }

    if (littleDudeYPosition + littleDudeHeight > windowHeight){
        littleDudeYPosition = windowHeight - littleDudeHeight
    }

    // if(littleDudeYPosition - littleDudeHeight < -100){
    //     littleDudeYPosition = 0
    // }

    if (level2 == 5){
        littleDudeYPosition = littleDudeYPosition
        if (littleDudeYPosition >= windowHeight/2){
            if(something == 1){
                littleDudeYPosition = littleDudeYPosition + windowHeight / 6
                something = 0
            }
            littleDudeYPosition = littleDudeYPosition - RPaddleSpeed/8
            if (RPaddleSpeed >= 10){
                RPaddleSpeed = RPaddleSpeed - 4/2
            }
            if (RPaddleSpeed <= 10){
                RPaddleSpeed = RPaddleSpeed - (1/10)
                if (RPaddleSpeed < 0){
                    RPaddleSpeed = 0
                }
            }
        }
        if (littleDudeYPosition < windowHeight/2){
            if(something == 1){
                littleDudeYPosition = littleDudeYPosition - windowHeight / 6
                something = 0
            }
            littleDudeYPosition = littleDudeYPosition + RPaddleSpeed/8
            if (RPaddleSpeed >= 10){
                RPaddleSpeed = RPaddleSpeed - 4/2
            }
            if (RPaddleSpeed <= 10){
                RPaddleSpeed = RPaddleSpeed - (1/10)
                if (RPaddleSpeed < 0){
                    RPaddleSpeed = 0
                }
            }
            RPaddleYPosition = 0
            RPaddle.style.top = `${RPaddleYPosition}px`
        }
    }
    littleDude.style.top = `${littleDudeYPosition}px`
}


function createEndScreen(){
    gameOver.style.opacity = "0"
    gameOver.style.backgroundColor = "black"
    gameOver.style.height = "100%"
    gameOver.style.width = "100%"
    gameOver.style.position = "absolute"
    gameOver.style.left = "0"
    gameOver.style.top = "0"
    gameOver.style.transition = "ease 3s"

    let gameOverTextWidth = 200
    let gameOverTextHeight = 100
    gameOverText.style.position = "absolute"
    gameOverText.style.opacity = "0"
    gameOverText.style.backgroundColor = "transparent"
    gameOverText.style.left = `${windowWidth/2 - gameOverTextWidth}px`
    gameOverText.style.top = `${windowHeight/2 - gameOverTextHeight}px`
    gameOverText.innerHTML = "Game Over"
    gameOverText.style.fontSize = `${gameOverTextHeight}px`
    gameOverText.style.color = "white"
    gameOverText.style.transition = "ease 5s"

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
    time.innerHTML = `Time:${m}:${s}`
    seconds = seconds + 1
}

function increaseScore() {
    score2 = score2 + 1
    score.innerHTML = `Score:${score2}`
}
function increaseLevel(){
    level2 = level2 + 1
    level.innerHTML = `Level:${level2}`
}

// `${littleDudeWidth}px`


function createLittleDude(){
    littleDude.style.position = "absolute"
    littleDude.style.zIndex = -100
    littleDude.style.right = '0px'
    littleDude.style.backgroundColor = "white"
    littleDude.style.width = '250px'
    littleDude.style.height = `${littleDudeHeight}px`
    // littleDude.src = '../images/littleDude.png'
}


// function running(){

//     if(run){
//         littleDude.src
//     }
// }

function animate(){
    if(playing == true){
        moveBall()
        movePaddle()
        requestAnimationFrame(animate) //Everytime pc refreshes, function goes again, 60 times a second/ whatever refresh rate is.
    }
    // moveBall()
    // movePaddle()
    // requestAnimationFrame(animate)
}


animate()






//If top of the ball is less than or equal to the top of the paddle and the
//bottom of the ball is greater than or equal to the bottom of the paddle and left side of the ball is less
//than or equal to the right side of the paddle then change ball direction
let count = 0
let falling = 1
function littleDudeAnim(){

    if(level2 < 5){
        count = count + 1
        if (count % 15 >= 7){
            littleDude.src = "images/littleDude2.png"
        }
        else {
            littleDude.src = "images/littleDude.png"
        }
    }

    if (level2 == 5){
        if(falling == 1){
            count = 0
            falling = 0
        }
        count = count + 1
        if(count < 55){
            littleDude.src = "images/littleDudeFall.png"
        }
        else{
            littleDude.src = "images/littleDudeFall2.png"
        }

    }

    // littleDude.classList.toggle('active')

}
