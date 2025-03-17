const hamMenu = document.querySelector('.ham-menu');

const offScreen = document.querySelector('.off-screen-menu');
const rasm = document.getElementById('rasm');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');     
    offScreen.classList.toggle('active');
    rasm.style.position = rasm.style.position === 'static' ? 'relative' : 'static';
});