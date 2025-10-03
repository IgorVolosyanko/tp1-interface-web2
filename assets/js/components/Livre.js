import BoiteModale from "./BoiteModale.js";
import LivreModale from "./LivreModale.js";

class Livre {
  #liste;
  #grilleHTML;
  #livreModale;
  constructor(liste, grilleHTML) {
    this.#liste = liste;
    this.#grilleHTML = grilleHTML;
    this.#ecouterClic();
  }

  /**
   * Écoute l'événement de la tuile du livre.
   */
  #ecouterClic() {
    if (!this.#grilleHTML) return;
    this.#grilleHTML.addEventListener("click", this.#onClicTuile.bind(this));
  }

  /**
   * Execute le passage des données à la classe Application après le clic.
   * @param {MouseEvent} event
   */
  #onClicTuile(event) {
    const declencheur = event.target;
    if (!declencheur.closest("[data-tuile]")) return;
    const btnImage = declencheur.dataset.titre;
    const objetFiltre = this.#rechercherLivre(btnImage);
    const paramEvent = {
      detail: {
        titre: objetFiltre[0].titre,
        auteur: objetFiltre[0].auteur,
        editeur: objetFiltre[0].editeur,
        pages: objetFiltre[0].pages,
        description: objetFiltre[0].description,
        image: objetFiltre[0].image,
      },
    };
    const eventAjoutLivre = new CustomEvent("ajoutLivre", paramEvent);
    document.dispatchEvent(eventAjoutLivre);
  }

  /**
   * Retrouve l'objet selon le titre.
   * @param {string} btnImage
   * @returns {Array<Objet>}
   */
  #rechercherLivre(btnImage) {
    return this.#liste.filter((element) => {
      return element.titre === btnImage;
    });
  }
}

export default Livre;
