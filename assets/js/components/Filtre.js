import Affichage from "./Affichage.js";

class Filtre {
  #liste;
  #grilleHTML;
  #filtreHTML;
  #affichage;
  #declencheurPrecedent;
  constructor(liste, grilleHTML, filtresHTML) {
    this.#liste = liste;
    this.#grilleHTML = grilleHTML;
    this.#filtreHTML = filtresHTML;
    this.#affichage = new Affichage(this.#liste, grilleHTML);
    this.#ecouteur();
  }

  /**
   * Écoute événement des liens pour filtrer.
   */
  #ecouteur() {
    if (!this.#filtreHTML) return;
    this.#filtreHTML.addEventListener("click", this.#onClicFiltre.bind(this));
  }

  /**
   * Gère le clic sur un filtre pour afficher une nouvelle liste.
   * @param {MouseEvent} event
   */
  #onClicFiltre(event) {
    const declencheur = event.target;
    if (!declencheur.closest("a")) return;
    declencheur.classList.add("sous-ligne");
    if (this.#declencheurPrecedent !== declencheur) {
      if (this.#declencheurPrecedent) {
        this.#declencheurPrecedent.classList.remove("sous-ligne");
      }
      this.#declencheurPrecedent = declencheur;
    }
    const btnRadio = declencheur.dataset.categorie;
    const listeFiltre = this.#categoriserListe(btnRadio);
    this.#grilleHTML.innerHTML = "";
    this.#affichage.afficherListe(listeFiltre);
  }

  /**
   * Retourne les objets du tableau filtrés.
   * @param {string} btnRadio
   * @returns {Array<Object>}
   */
  #categoriserListe(btnRadio) {
    switch (btnRadio) {
      case "Nouveautés":
        return this.#filtrerNouveaute(this.#liste);
      case "Tous":
        return this.#liste;
      default:
        return this.#filtrerListe(this.#liste, btnRadio);
    }
  }

  /**
   * Filtre la liste d'objets qui qui possèdent (nouveaute: true).
   * @param {Array<Object>} liste
   * @returns {Array<Object>}
   */
  #filtrerNouveaute(liste) {
    return liste.filter((element) => {
      return element.nouveaute === true;
    });
  }

  /**
   * Filtre les objets du tableau selon la categorie.
   * @param {Array<Object>} liste
   * @param {string} categ
   * @returns {Array<Object>}
   */
  #filtrerListe(liste, categ) {
    return liste.filter((element) => {
      return element.categorie === categ;
    });
  }
}

export default Filtre;
