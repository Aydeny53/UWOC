const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)

let LPaddleWidth = 10
let LPaddleHeight = 200
let LPaddleSpeed = 20
let LPaddleXPosition = 50
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight/2

let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth

const ballRadius = 20




let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

let ballLeft = ballXPosition
let ballBottom = ballYPosition+2 * ballRadius
let ballTop = ballYPosition



let score = 0 //Display, and increase score by 1 everytime ball hits paddle
let level = 1 //display level, increase level by 1 everytime score increases by 10
// As levels increase, increase ballSpeed
//If ball gets past paddle, end game
//make ball stop/disappear, let user know game is over
//optional: sound effects, background music, 





createBall()
createLPaddle()

// setInterval(moveBall, 1)







sKey = false
wKey = false
document.addEventListener('keydown', (event)=> {
    if (event.key == 'w'){
        wKey = true


        if (LPaddleYPosition <= 0){
            LPaddleYPosition = 0
        }
        else {
            LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        }
    }
    if (event.key == 's'){
        sKey = true


        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        if (LPaddleYPosition >= windowHeight - LPaddleHeight){
            LPaddleYPosition = windowHeight - LPaddleHeight
        }
        else{
            LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        }
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})

document.addEventListener('keyup', (event)=> {
    if (event.key == 'w'){
        wKey = false
        // if (LPaddleYPosition <= 0){
        //     LPaddleYPosition = 0
        // }
        // else {
        //     LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        // }
    }
    if (event.key == 's'){
        sKey = false
        // LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        // if (LPaddleYPosition >= windowHeight - LPaddleHeight){
        //     LPaddleYPosition = windowHeight - LPaddleHeight
        // }
        // else{
        //     LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        // }
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth-ballRadius*2){
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight-ballRadius*2){
        ballYDirection = ballYDirection * -1
    }

    if (
        ballBottom >= LPaddleTop &&
        ballTop <= LPaddleBottom &&
        ballLeft <= LPaddleRight &&
        ballXDirection == -1
        ){
            ballXDirection = ballXDirection * -1
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
}


function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function movePaddle(){
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition -LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight){
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}






function animate(){
    moveBall()
    movePaddle()
    requestAnimationFrame(animate) //Everytime pc refreshes, function goes again, 60 times a second/ whatever refresh rate is.
}

animate()

//If top of the ball is less than or equal to the top of the paddle and the
//bottom of the ball is greater than or equal to the bottom of the paddle and left side of the ball is less
//than or equal to the right side of the paddle then change ball direction
