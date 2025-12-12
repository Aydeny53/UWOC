const search = document. querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const submitButton = document.querySelector('.submit')

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
    else {
        message.innerHTML = "Huh, doesn't seem like that's anything...";
    }
    return;

}
