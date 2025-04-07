const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 200
const ballRadius = 20
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 10
let ballXDirection = 1
let ballYDirection = 1


createBall()
createLPaddle()

setInterval(moveBall, 1)




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
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${windowHeight / 2 - LPaddleHeight/2}px`
}
