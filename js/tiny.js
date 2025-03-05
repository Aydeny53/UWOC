const little = document.querySelector('.little')
const food = document.querySelector('.food')


let positionY = 0;
let positionX = 0;
let foodPosY = food.style.top + 775;
let foodPosX = food.style.left + 800;
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

    if (little.style.bottom > foodPosY && little.style.right > foodPosX) {
        little.style.backgroundColor = "blue";
    }
    else if (little.style.bottom < foodPosY || little.style.right < foodPosX) {
        little.style.backgroundColor = "transparent";
    }

    if (little.style.backgroundColor == "blue") {
        positionY = positionY - 10
        positionX = positionX - 10
    }

    little.style.bottom = `${positionY}%`
    little.style.right = `${positionX}%`



})
