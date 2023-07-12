const colorsInput = document.querySelector('#colors-input');
const generateBtn = document.querySelector('#generate-btn');
const colorsContainer = document.querySelector('.colors-container');

generateBtn.addEventListener('click', () => {
    const numColors = parseInt(colorsInput.value);
    colorsContainer.innerHTML = '';

    for (let i = 0; i < numColors; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');

        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
        colorBox.style.background = gradient;

        const colorLabel = document.createElement('div');
        colorLabel.classList.add('color-label');
        colorLabel.textContent = `${color1} to ${color2}`;
        colorBox.appendChild(colorLabel);

        colorsContainer.appendChild(colorBox);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
