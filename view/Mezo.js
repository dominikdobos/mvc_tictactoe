export default class Mezo {
  #szuloElem;
  #jel = "";
  #index;

  constructor(szuloElem, index, jel) {
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#jel = jel;

    this.mezoMegjelenit();
    this.mezo = $(".mezo:last");

    this.esemenyKezelo();
  }

  mezoMegjelenit() {
    let classNev = "mezo";
    if (this.#jel) {
      classNev += " kivalasztott";
    }
    let txt = `
    <div class='${classNev}'>${this.#jel}</div>
    `;
    this.#szuloElem.append(txt);
  }

  esemenyKezelo() {
    this.mezo.on("click", () => {
      const e = new CustomEvent("kivalaszt", {
        detail: this.#index,
      });
      window.dispatchEvent(e);
    });
  }
}
