const keyInput = document.querySelector("#key-input");

function playSound(e) {
    const audio = document.querySelector(`#key-${e.keyCode}`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

keyInput.addEventListener("keydown", playSound)
