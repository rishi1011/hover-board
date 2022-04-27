const container = document.getElementById('container');
const colors = ['#a972cb', '#ef6eae', '#ff7f82', '#ffa260', '#e4cb58', '#8fc866', '#19bc8b'];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    container.appendChild(square);
}

function setColor() {
    const color = getRandomColor();
    this.style.backgroundColor = color;
    this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor() {
    this.style.backgroundColor = '#1d1d1d';
    this.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
