function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const background = document.querySelector('body');
const widgetEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', handleBtnClick);

function handleBtnClick() {
    const randomColor = getRandomHexColor();

    widgetEl.innerHTML = randomColor;
    background.style.backgroundColor = randomColor;
}
