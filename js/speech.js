const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textArea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: 'images2/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'images2/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: 'images2/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: 'images2/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'images2/grandma.jpg',
        text: "I Want To Go To Grandmas"
    },
    {
        image: 'images2/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'images2/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: 'images2/home.jpg',
        text: "I Want To Go Home"
    },
    {
        image: 'images2/outside.jpg',
        text: "I Want To Go Outside"
    },
    {
        image: 'images2/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'images2/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: 'images2/school.jpg',
        text: "I Want To Go To School"
    }
]


data.forEach(createBox)

function createBox(item){
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src="${item.image}" alt="${item.text}" />
        <p class="info">${item.text} </p>
    `

    box.addEventListener('click', ()=>{
        setTextMessage(item.text)
        speakText()

        box.classList.add('active')
        setTimeout(()=>box.classList.remove('active') ,800)

    })

    main.appendChild(box)

}

//Initialize speech synthesis
const message = new SpeechSynthesisUtterance()

//set text
function setTextMessage(text){
    message.text = text
}

//speak text
function speakText(){
    speechSynthesis.speak(message)
}

// toggle textbox
toggleBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.toggle('show')
})


// close box
closeBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.remove('show')
})


let voices = []

function getVoices(){
    voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
        const option = document.createElement('option')

        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`

        voicesSelect.appendChild(option)
    })
}

//voices change
speechSynthesis.addEventListener('voiceschanged', getVoices)

//chage voice
voicesSelect.addEventListener('change', setVoice)

//set voice
function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value)
}
getVoices()


readBtn.addEventListener('click', ()=> {
    setTextMessage(textArea.value)
    speakText()
})
