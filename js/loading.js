const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 150)

function blurring() {
    load = load + 1
    bg.style.filter = `blur(${80 - load/2}px)`
    loadText.style.opacity = `${1 - load / 200}`
    loadText.innerText = `${load}%`
    if (load > 99){
        load = load + 3
        loadText.innerText = "Complete"
        wait(1)
        // bg.style.filter = "blur(0px)"
        loadText.style.opacity = `${1 - load / 100}`
        clearInterval(int)

    }



}



