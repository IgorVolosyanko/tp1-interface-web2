class Affichage {
  #grilleHTML;
  #liste;
  constructor(liste, grilleHTML) {
    this.#grilleHTML = grilleHTML;
    this.#liste = liste;
    this.afficherListe(this.#liste);
  }
  /**
   * Affiche les cartes en injectant les éléments de HTML
   * @param {Array<Object>} liste
   */
  afficherListe(liste) {
    if (!liste) return;
    liste.forEach((element) => {
      const listeElements = element;
      this.#injecterElement(listeElements);
    });
  }

  /**
   * Injecte les éléments de HTML
   * @param {Array<Object>} listeElements
   */
  #injecterElement(listeElements) {
    let gabarit = `
        <div class="carte" data-livre>
            <a href="#" data-tuile="">
              <img src="${listeElements.image}" alt="image de livre" data-titre="${listeElements.titre}"/>
            </a>            
            <p >${listeElements.titre}</p>
            <h3>${listeElements.prix} $</h3>
            <button class="btn">Ajouter</button>
        </div>
    `;
    this.#grilleHTML.insertAdjacentHTML("beforeend", gabarit);
  }
}

export default Affichage;
