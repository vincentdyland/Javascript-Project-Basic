const button = document.querySelector('.btn');
const background = document.querySelector('.background');
const text = document.getElementById("text");

function ChangeHexColor() {
    let hex = '#';
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C'
                                            , 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        hex += array[RandomColor(array)];
    }
    background.style.backgroundColor = hex;
    text.textContent = hex;

}

function RandomColor(ArrayColor) {
    return Math.floor(Math.random() * ArrayColor.length);
}

button.addEventListener('click', ChangeHexColor);