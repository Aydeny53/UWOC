const search = document. querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const submitButton = document.querySelector('.submit')
const peak = document.createElement('div')

let flyer = false


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

submitButton.addEventListener("click", myFunction)


function myFunction(){
    let userInput = document.querySelector('#Tasha');
    let message = document.querySelector('#Message');

    if (flyer) {
        flyer = false
        document.body.removeChild(peak)
    }



    if (userInput.value == "hi" || userInput.value == "Hi" || userInput.value == "hello" || userInput.value == "Hello") {
            message.innerHTML = "HI THEREEEEEE ";
    }
    else if (userInput.value == "uwoc" || userInput.value == "UWoC" || userInput.value == "UWOC") {
        message.innerHTML = "It's the best thing ever!";
    }
    else if (userInput.value == "") {
        message.innerHTML = message.innerHTML;
    }
    else if (userInput.value == "Flyer" || userInput.value == "flyer") {
        message.innerHTML = "Wow, I can't believe you got that honestly. Yippee! You better have sent a Hello...";
        document.body.appendChild(peak)
        peak.style.position = 'absolute'
        peak.style.top = '35px'
        peak.style.width = '250px'
        peak.style.height = '250px'
        peak.style.backgroundImage = "url('Images4Website/Peek.gif')"
        peak.style.backgroundSize = "100%"
        flyer = true
    }
    else {
        message.innerHTML = "Huh, doesn't seem like that's anything...";
    }
    return;

}
