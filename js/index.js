const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', ()=> {
    menu.classList.toggle("active")
    links.classList.toggle("active")

    setTimeout ( ()=> menu.classList.toggle("doubleActive"), 50)
    setTimeout ( ()=> menu.classList.toggle("tripleActive"), 300)
    setTimeout ( ()=> menu.classList.toggle("quadActive"), 350)


    // menu.classList.add('active')
    // menu.classList.remove('active')
})


