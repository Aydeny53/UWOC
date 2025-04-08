const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)

let LPaddleWidth = 10
let LPaddleHeight = 200
let LPaddleSpeed = 20
let LPaddleXPosition = 
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight/2

const ballRadius = 20




let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1


createBall()
createLPaddle()

setInterval(moveBall, 1)

document.addEventListener('keydown', (event)=> {
    if (event.key == 'w'){
        if (LPaddleYPosition <= 0){
            LPaddleYPosition = 0
        }
        else {
            LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        }



    }
    if (event.key == 's'){
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

    if (ballYPosition >= LPaddleYPosition && ballXPosition == '50'){
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
    LPaddle.style.top = `${LPaddleYPosition}px`
}


//If top of the ball is less than or equal to the top of the paddle and the
//bottom of the ball is greater than or equal to the bottom of the paddle and left side of the ball is less
//than or equal to the right side of the paddle then change ball direction
