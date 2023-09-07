const elements = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

elements.start.addEventListener('click', onClickStart);
elements.stop.addEventListener('click', onClickStop);

let timerID = null;


function onClickStart() {
    elements.start.disabled = true;
    elements.stop.disabled = false;
    timerID = setInterval(() => {
        elements.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}


function onClickStop() {
    elements.start.disabled = false;
    elements.stop.disabled = true;
    clearInterval(timerID);
}