const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', e => {
    const inputValue = inputElem.value.trim();

    if (inputValue === '') {
        outputElem.innerHTML = 'Anonymous';
    } else {
        outputElem.textContent = e.currentTarget.value;
    }
});
