const buttonArea = document.querySelector('.button-area');
const button = document.querySelector('.button-effect');

button.addEventListener('mousedown', (e)=>{
    let posX = e.offsetX;
    let posY = e.offsetY;

    buttonArea.style.setProperty('--x', posX + 'px');
    buttonArea.style.setProperty('--y', posY + 'px');

    button.classList.add('pulse');

    button.addEventListener('animationend', () => {
        button.classList.remove('pulse');
    })
})
