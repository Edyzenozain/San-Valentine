const messages = [
    "¿Estas segura?",
    "¿Realmente segura?",
    "¿Estas bien?",
    "Por favor, piensalo",
    "Piénsalo bien",
    "Si dices que no, me pondré mal :(",
    "Estaré super triste",
    "Está bien, dejaré de preguntar",
    "Era broma, di si por favor",
    "Si dices que sí, seré muy feliz :D",
    "Está bien... pero me dolerá",
    "Última oportunidad... ¿segura?"
]

let messageIndex = 0;

function hanldeNoClick(){
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex+1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize); 
    const newSize = currentSize * 2;
    yesBtn.style.fontSize = '${newSize}px';

    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.transition = "transform 0.3s ease";

    setTimeout(()=>{
        yesBtn.style.transform = "scale(1)";
        yesBtn.style.transition = "transform 0.3s ease";
    }, 100);
}

function hanldeYesClick(){
    window.location.href = "yes.html";
}

