class BoiteModale {
  #conteneurHTML;
  #elementHTML;
  #titre;
  #auteur;
  #editeur;
  #pages;
  #description;
  #imageURL;

  constructor(
    conteneurHTML,
    titre,
    auteur,
    editeur,
    pages,
    description,
    imageURL
  ) {
    this.#conteneurHTML = conteneurHTML;
    this.#titre = titre;
    this.#auteur = auteur;
    this.#editeur = editeur;
    this.#pages = pages;
    this.#description = description;
    this.#imageURL = imageURL;
    this.#elementHTML;
    this.#injecterHTML();
  }

  /**
   * Modificateur de titre.
   */
  set titre(nouveauTitre) {
    if (nouveauTitre === "") return;
    this.#titre = nouveauTitre;
  }

  /**
   * Accesseur au titre.
   */
  get titre() {
    return this.#titre;
  }

  /**
   * Modificateur de description.
   */
  set description(nouveauDescription) {
    if (nouveauDescription === "") return;
    this.#description = nouveauDescription;
  }

  /**
   * Accesseur au description.
   */
  get description() {
    return this.#description;
  }

  /**
   * Affiche les éléments HTML.
   */
  afficher() {
    this.#fermer();
    this.#injecterHTML();
  }

  /**
   * Chache les éléments HTML.
   */
  #fermer() {
    if (!this.#elementHTML) return;
    this.#elementHTML.remove();
    document.body.classList.remove("modale-verrou");
  }

  /**
   * Injecte les éléments HTML et réagit au événement du bouton.
   */
  #injecterHTML() {
    const gabarit = `<div class="boite-modale"> 
                <div class="boite-modale-contenu" data-boite-modale=""> 
                    <img src="${this.#imageURL}" alt=""/>
                    <div>
                        <p>Titre : <span>${this.#titre}</span></p> 
                        <p>Auteur : <span>${this.#auteur}</span></p> 
                        <p>Editeur : <span>${this.#editeur}</span></p>
                        <p>Pages : <span>${this.#pages}</span></p>    
                        <p class="description">${this.#description}</p> 
                    </div>
                </div>
                <a href="#" data-fermer=""><img src="./assets/img/close.svg" alt="Fermer" /></a>
            </div>`;
    if (!this.#conteneurHTML) return;
    document.body.classList.add("modale-verrou");
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this.#elementHTML = this.#conteneurHTML.lastElementChild;
    const fermerHTML = document.querySelector("[data-fermer]");
    fermerHTML.addEventListener("click", this.#onClicFermer.bind(this));
  }

  /**
   * Cache les éléments HTML après un clic.
   */
  #onClicFermer(event) {
    this.#fermer();
  }
}

export default BoiteModale;
