export default class Model {
  #LEPESEK;
  #szamlalo;

  constructor() {
    this.#szamlalo = 0;
    this.#LEPESEK = ["", "", "", "", "", "", "", "", ""];
  }

  getLEPESEK() {
    return this.#LEPESEK;
  }

  setLEPESEK(index) {
    if (!this.#LEPESEK[index]) {
      this.#LEPESEK[index] = this.#szamlalo % 2 == 0 ? "X" : "O";
    }
  }

  setSzamlalo(szamlalo) {
    this.#szamlalo = szamlalo;
  }

  getSzamlalo() {
    return this.#szamlalo;
  }
}
