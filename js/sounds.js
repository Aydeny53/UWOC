const sounds = ['applause', 'boo', 'tada', 'gasp', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound


    document.getElementById('buttons').appendChild(btn)
})
