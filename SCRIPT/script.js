var audio = document.getElementById("audioPlayer");
audio.controls = false; // Oculta los controles predeterminados

// Crea un botón de reproducción personalizado
var playButton = document.createElement("buttonMusic");
playButton.innerHTML = "Play music";

// Añade el evento de reproducción al botón personalizado
playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Añade el botón personalizado al contenedor
var container = document.querySelector(".nav-item");
container.appendChild(playButton);

function abrirPDF() {
  window.open(".//IMAGENES/CV-Ronny-Sierra.pdf", "_blank");
}

function toggleMenu() {
  var navbar = document.getElementById("navbarNav");
  navbar.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", toggleMenu);
});

// Obtener todos los elementos del menú desplegable
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Cerrar el menú desplegable cuando se hace clic en una opción
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse");
    navbar.classList.remove("show");
  });
});
