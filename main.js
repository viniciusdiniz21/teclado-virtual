// get keys
const keys = document.querySelectorAll(".key")

function playNotes(event){
    // key code
    let keyCode = getKeyCode(event)

    // typed key
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)

    // if key exists
    const keyDontExists = !key

    if(keyDontExists){
        return;
    }
    // play sound
    addPlayingClass(key)
    playAudio(keyCode)
}

function registerEvents(){
    // click with mouse
    keys.forEach(key =>{
    key.addEventListener("click", playNotes)
    key.addEventListener("transitionend", removePlayingClass)
    })

    // keyboard type
    window.addEventListener("keydown", playNotes)
}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown"
    
    if(isKeyboard){
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }


    return keyCode
}

function playAudio(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    
    audio.currentTime = 0;

    audio.play()
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function removePlayingClass(event){
    event.target.classList.remove('playing')
}

window.addEventListener("load", registerEvents)