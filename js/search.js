const search = document. querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const submitButton = document.querySelector('.submit')
const peak = document.createElement('div')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

submitButton.addEventListener("click", myFunction)


function myFunction(){
    let userInput = document.querySelector('#Tasha');
    let message = document.querySelector('#Message');
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
        // peak.style.backgroundColor = 'black'
        // peak.style.left = '100px'
        peak.style.top = '-45px'
        peak.style.width = '200px'
        peak.style.height = '200px'
        peak.style.backgroundImage = "url('Images4Website/Peek.gif')"
        peak.style.backgroundSize = "50%"
        peak.style.backgroundRepeat = "noRepeat"
    }
    else {
        message.innerHTML = "Huh, doesn't seem like that's anything...";
    }
    return;

}
