// @ts-check
/** Igualar el color del tema del sistema operativo. */
function ui() {
  const machMedia = window.matchMedia("(prefers-color-scheme: dark)");
  // TODO: ver si puedo usar instance of HTMLElement y trow error como en index.tsx para evitar errores aquí.
  // Igual, solo como experimento, porque la verdad no creo questa sea la forma de aplicar estilos.
  if (machMedia.matches) {
    document.getElementById("root").classList.add("dark");
  } else {
    document.getElementById("root").classList.add("light");
  }
}

export default ui;
