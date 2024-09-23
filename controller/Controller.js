import Modell from "../modell/Modell.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller {
  #JATEKTER;
  #MODELL;
  constructor() {
    this.#MODELL = new Modell();
    this.#JATEKTER = $(".jatekter");
    new Jatekter(this.#JATEKTER, this.#MODELL.getLEPESEK());
    this.kivalaszt();
  }

  kivalaszt() {
    $(window).on("kivalaszt", (event) => {
      this.#MODELL.setLEPESEK(event.detail);

      let szamlalo = this.#MODELL.getSzamlalo();
      szamlalo++;

      this.#MODELL.setSzamlalo(szamlalo);

      new Jatekter(this.#JATEKTER, this.#MODELL.getLEPESEK());
      let vegeredmeny = this.#MODELL.ellenoriz();

      switch (vegeredmeny) {
        case "O":
          setTimeout(() => {
            alert("'O' nyert!");
          }, 2);
          location.reload();
          break;
        case "X":
          setTimeout(() => {
            alert("'X' nyert!");
          }, 2);
          location.reload();
          break;
        case "-":
          setTimeout(() => {
            alert("Döntetlen!");
          }, 2);
          location.reload();
      }
    });
  }
}
