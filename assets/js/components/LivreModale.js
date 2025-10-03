import BoiteModale from "./BoiteModale.js";

class LivreModale extends BoiteModale {
  #objetFiltre;
  constructor(
    conteneurHTML,
    titre,
    auteur,
    editeur,
    pages,
    description,
    imageChemin
  ) {
    super(
      conteneurHTML,
      titre,
      auteur,
      editeur,
      pages,
      description,
      imageChemin
    );
  }

  /**
   * Modifie description.
   * @param {string} description
   */
  modifierDescription(titre, description) {
    if (titre === this.titre) {
      this.description = description;
      this.afficher();
    }
    // super.modifier(titre);
  }

  /**
   * Modifie titre.
   * @param {string} description
   */
  modifierTitre(titre, nouveauTitre) {
    if (titre === this.titre) {
      this.titre = nouveauTitre;
      this.afficher();
    }
  }
}

export default LivreModale;
