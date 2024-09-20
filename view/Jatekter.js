import Mezo from "./Mezo.js";

export default class Jatekter {
  #szuloElem;
  #LISTA;

  constructor(szuloElem, LISTA) {
    this.#szuloElem = szuloElem;
    this.#LISTA = LISTA;
    this.JatekterGeneral();
  }

  JatekterGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < 9; index++) {
      new Mezo(this.#szuloElem, index, this.#LISTA[index]);
    }
    console.log(this.#LISTA);
  }
}
