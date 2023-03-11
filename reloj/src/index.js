import "./styles.css";

const d = document;

const title$ = d.getElementById("h1");

const container$ = d.getElementById("container");

title$.innerHTML = "Reloj Digital y Alarma Sonora";

container$.classList.add("container-div");

//const iniciarReloj$ = d.getElementById("start-clock");

let result$ = d.getElementById("result");

let hora = new Date();

d.addEventListener("click", (e) => {
  if (e.target.matches("#start-clock")) {
    setInterval(() => {
      result$.innerHTML = hora.toLocaleTimeString();
    }, 1000);
  }

  if (e.target.matches("#stop-clock")) {
    clearInterval();
    result$.innerHTML = "";
  }
});
