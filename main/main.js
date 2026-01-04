// Obtener el botón
const startButton = document.getElementById('startBtn');

// Añadir evento click para navegar a characters
startButton.addEventListener('click', () => {
    window.location.href = '../characters/characters.html';
});

// Opcional: Añadir efecto de sonido al hacer click
// startButton.addEventListener('click', () => {
//     const audio = new Audio('../assets/sounds/click.mp3');
//     audio.play();
//     setTimeout(() => {
//         window.location.href = '../characters/characters.html';
//     }, 300);
// });
