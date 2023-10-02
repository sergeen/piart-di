// @ts-check
/** Igualar el color del tema del sistema operativo. */
function ui() {
  const machMedia = window.matchMedia("(prefers-color-scheme: dark)");

  if (machMedia.matches) {
      document.getElementById("root").classList.add("dark");
  } else {
      document.getElementById("root").classList.add("light");
  }

}

export default ui;