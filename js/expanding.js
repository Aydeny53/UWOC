const panels = document.querySelectorAll('.panel')

// console.log("Hello")
// console.log(panels)

panels.forEach (panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
