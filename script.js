const keyInput = document.querySelector("#key-input");
const btns = document.querySelectorAll("button");

function playSound(e) {
    const audio = document.querySelector(`audio[id="key-${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function addTrans(e) {
    const btn = document.querySelector(`button[id="key-${e.keyCode}"]`);
    btn.classList.add('trans');
}

function removeTrans(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("trans");
}

keyInput.addEventListener("keydown", playSound);
keyInput.addEventListener("keydown", addTrans);

btns.forEach(btn => btn.addEventListener("transitionend", removeTrans));