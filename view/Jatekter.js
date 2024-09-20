import Mezo from "./Mezo.js";

export default class Jatekter {
  #szuloElem;
  #meret;
  #LISTA;

  constructor(szuloElem, meret, LISTA) {
    this.#szuloElem = szuloElem;
    this.#meret = meret;
    this.#LISTA = LISTA;
    this.JatekterGeneral();
  }

  JatekterGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < this.#meret; index++) {
      new Mezo(this.#szuloElem, index, this.#LISTA[index]);
    }
    console.log(this.#LISTA);
  }
}
