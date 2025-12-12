UWOC
const little = document.querySelector('.little')
const food = document.querySelector('.food')
const text = document.querySelector('.text')


let positionY = 0;
let positionX = 0;


let foodPosY = 45;
let foodPosX = 65;


let finished = false;

document.addEventListener('keyup', (event)=> {
    console.log(event.key)


    if (event.key == 'ArrowDown') {
        positionY = positionY - 5
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY + 5
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 5
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 5
    }

    //Can't leave beginning borders
    if (positionY < 0) {
        positionY = 0
    }
    if (positionX < 0) {
        positionX = 0
    }


    //Triggers 'win' area
    if (positionY > foodPosY && positionX > foodPosX) {
        little.src = "images/Full.png"
        finished = true;
    }
    else if (positionY < foodPosY || positionX < foodPosX) {
        finished = false;
    }

    if (finished) {
        positionY = positionY - 10
        positionX = positionX - 10
        text.innerHTML = "<h1> Yippee, he's not starving :) <h1>"
    }


    //If leaves end borders
    if (positionY == 110 || positionX == 110) {
        positionY = 55
        positionX = 45
        text.innerHTML = " <h1> Why did you do that? :( <br> He got lost <h1>"


    }

    little.style.bottom = `${positionY}%`
    little.style.right = `${positionX}%`
})
