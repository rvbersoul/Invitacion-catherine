/*
  INVITACIÓN CATHERINE - 50 AÑOS
*/

const NUMERO_WHATSAPP = "56991582670";

/*
  Fecha del cumpleaños:
  lunes 10 de agosto de 2026
  a las 17:30, hora de Chile continental.
*/
const FECHA_EVENTO = "2026-08-10T17:30:00-04:00";


// ABRIR INVITACIÓN

const abrirBtn = document.getElementById("abrirBtn");
const contenido = document.getElementById("contenido");

abrirBtn.addEventListener("click", () => {
  contenido.classList.remove("oculto");

  setTimeout(() => {
    contenido.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 80);
});


// CUENTA REGRESIVA

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function agregarCero(numero) {
  return String(numero).padStart(2, "0");
}

function actualizarContador() {
  const ahora = Date.now();
  const fechaEvento = new Date(FECHA_EVENTO).getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    dias.textContent = "00";
    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    return;
  }

  const totalSegundos = Math.floor(diferencia / 1000);

  const cantidadDias = Math.floor(totalSegundos / 86400);
  const cantidadHoras = Math.floor((totalSegundos % 86400) / 3600);
  const cantidadMinutos = Math.floor((totalSegundos % 3600) / 60);
  const cantidadSegundos = totalSegundos % 60;

  dias.textContent = agregarCero(cantidadDias);
  horas.textContent = agregarCero(cantidadHoras);
  minutos.textContent = agregarCero(cantidadMinutos);
  segundos.textContent = agregarCero(cantidadSegundos);
}

actualizarContador();
setInterval(actualizarContador, 1000);


// CONFIRMACIÓN POR WHATSAPP

const whatsappBtn = document.getElementById("whatsappBtn");

const mensajeWhatsApp =
  "Hola Catherine 💜. Confirmo mi asistencia a tu celebración de 50 años. ¡Nos vemos el 10 de agosto! ✨";

whatsappBtn.href =
  `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensajeWhatsApp)}`;
