//asignar un evento a un elemento
//evento de click
//Event listener=Escuchar el evento de click.
const buttons = document.querySelectorAll('button');

buttons.forEach(
    button => button.addEventListener('click', playSound)
);


function playSound(event) {
    const button = event.target;
    const note = button.dataset.note;
    const audio = document.getElementById('audio' + note);

    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
document.addEventListener('keydown', event => {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button)
        button.click();
})