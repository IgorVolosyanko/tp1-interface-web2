import Filtre from "./Filtre.js";
import LivreModale from "./LivreModale.js";
import Livre from "./Livre.js";

class Application {
  #liste;
  #grilleHTML;
  #conteneurHTML;
  constructor(liste, grilleHTML, filtresHTML, conteneurHTML) {
    this.#liste = liste;
    this.#grilleHTML = grilleHTML;
    this.#conteneurHTML = conteneurHTML;
    this.nouveauListe = new Filtre(liste, grilleHTML, filtresHTML);
    this.livre = new Livre(this.#liste, this.#grilleHTML);
    document.addEventListener("ajoutLivre", this.#onAjoutLivre.bind(this));
  }
  #onAjoutLivre(event) {
    const livreModale = new LivreModale(
      this.#conteneurHTML,
      event.detail.titre,
      event.detail.auteur,
      event.detail.editeur,
      event.detail.pages,
      event.detail.description,
      event.detail.image
    );
    // livreModale.modifierTitre("One", "Two");
    // livreModale.modifierDescription("Two", "Three");
  }
}
export default Application;
