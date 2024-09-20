export default class Modell {
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

  ellenoriz() {
    let allapot = this.vizszintes_ell();
    allapot += this.fuggoleges_ell();
    allapot += this.atlo_ell();
    const ALLAPOT_TOMB = allapot.split("@");

    console.log(ALLAPOT_TOMB);

    if (ALLAPOT_TOMB.indexOf("OOO") >= 0) {
      setTimeout(() => {
        alert("'O' nyert!");
      }, 2);
      location.reload();
      return;
    }
    if (ALLAPOT_TOMB.indexOf("XXX") >= 0) {
      setTimeout(() => {
        alert("'X' nyert!");
      }, 2);
      location.reload();
      return;
    }
    if (this.#LEPESEK.every(Boolean)) {
      setTimeout(() => {
        alert("Döntetlen!");
      }, 2);
      location.reload();
      return;
    }
  }

  vizszintes_ell() {
    let eredmeny = "";
    for (let index = 1; index <= this.#LEPESEK.length; index++) {
      eredmeny += this.#LEPESEK[index - 1];
      if (index % 3 === 0) {
        eredmeny += "@";
      }
    }
    return eredmeny;
  }

  fuggoleges_ell() {
    let eredmeny = "";
    for (let index = 0; index < 3; index++) {
      for (let j = 0; j < 3 * 3; j += 3) {
        eredmeny += this.#LEPESEK[index + j];
      }
      eredmeny += "@";
    }
    return eredmeny;
  }

  atlo_ell() {
    let eredmeny = "";
    // bal felső -> jobb alsó átló
    for (let index = 0; index < this.#LEPESEK.length; index += 3 + 1) {
      eredmeny += this.#LEPESEK[index];
    }
    //jobb felső -> bal alsó átló
    eredmeny += "@";
    for (let index = 3 - 1; index <= this.#LEPESEK.length - 3; index += 3 - 1) {
      eredmeny += this.#LEPESEK[index];
    }

    return eredmeny;
  }
}
