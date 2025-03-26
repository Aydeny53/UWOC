const menu = document.querySelector('.menu')

menu.addEventListener('click', ()=> {
    menu.classList.toggle("active")
    setTimeout ( ()=> menu.classList.toggle("doubleActive"), 50)
    setTimeout ( ()=> menu.classList.toggle("tripleActive"), 50)

    // menu.classList.add('active')
    // menu.classList.remove('active')
})
