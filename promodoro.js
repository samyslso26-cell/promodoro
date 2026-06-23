const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

let tempoTotal = 25 * 60;
let intervalo = null;
let rodando = false;

function atualizarTimer() {
    const minutos = Math.floor(tempoTotal / 60);
    const segundos = tempoTotal % 60;

    timerDisplay.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {

    if (!rodando) {

        rodando = true;
        startBtn.textContent = "Pausar";

        intervalo = setInterval(() => {

            tempoTotal--;

            atualizarTimer();

            if (tempoTotal <= 0) {

                clearInterval(intervalo);

                timerDisplay.textContent = "00:00";
                document.body.style.backgroundColor = "#2ecc71";

                message.textContent = " Hora de descansar!";
                startBtn.textContent = "Iniciar";
                rodando = false;

                alert("Hora de descansar!");

            }

        }, 1000);

    } else {

        clearInterval(intervalo);
        rodando = false;
        startBtn.textContent = "Iniciar";

    }

});

resetBtn.addEventListener("click", () => {

    clearInterval(intervalo);

    tempoTotal = 25 * 60;
    rodando = false;

    atualizarTimer();

    startBtn.textContent = "Iniciar";
    message.textContent = "";
    document.body.style.backgroundColor = "#ff6b6b";

});

atualizarTimer();