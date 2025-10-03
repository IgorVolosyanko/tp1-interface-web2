import Application from "../components/Application.js";
import { livres } from "../../../data/livres.js";

const liste = livres;
const grilleHTML = document.querySelector("[data-conteneur-livres]");
const filtresHTML = document.querySelector("[data-filtre]");
const conteneurHTML = document.querySelector("main");

function init() {
  const application = new Application(
    liste,
    grilleHTML,
    filtresHTML,
    conteneurHTML
  );
}

init();
