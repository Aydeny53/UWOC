const panels = document.querySelectorAll('.panel')

// console.log("Hello")
// console.log(panels)

panels.forEach (panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active') /*.add .remove .toggle are the ones you will use for most stuff*/
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
