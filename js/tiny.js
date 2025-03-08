const little = document.querySelector('.little')
const food = document.querySelector('.food')
const text = document.querySelector('.text')


let positionY = 0;
let positionX = 0;

// let posY = food.style.top
// let possX = food.style.left
//if positionX > posY tionY > posY
// let foodPosY = food.style.top + 775;
// let foodPosX = food.style.left + 800;

let foodPosY = 60;
let foodPosX = 75;

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
    if (positionY < 0) {
        positionY = 0
    }
    if (positionX < 0) {
        positionX = 0
    }


    // if (little.style.bottom < foodPosY && little.style.right < foodPosX) {
    //     little.style.backgroundColor = "transparent";
    // }

    // little.style.bottom
    if (positionY > foodPosY && positionX > foodPosX) {
        little.style.backgroundColor = "blue";
    }
    else if (positionY < foodPosY || positionX < foodPosX) {
        little.style.backgroundColor = "transparent";
    }

    if (little.style.backgroundColor == "blue") {
        positionY = positionY - 10
        positionX = positionX - 10
    }
    if (positionY == 125 || positionX == 125) {
        positionY = 55
        positionX = 45
        text.innerHTML = "Why did you do that? :( <br> He got lost"


    }

    little.style.bottom = `${positionY}%`
    little.style.right = `${positionX}%`
})
