

export function getRandomHexColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color === 'ffffff')
    { color = Math.floor(Math.random() * 16777215).toString(16); } return `#${color}`;
}

