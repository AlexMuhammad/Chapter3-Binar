class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.inputDate = document.getElementById("inputDate").value;
    this.inputTime = document.getElementById("inputTime").value;
    this.inputCapacity = document.getElementById("inputCapacity").value;
    this.searchBtn = document.getElementById("searchBtn");

  }

  async init() {
    await this.load();

    // Register click listener document.addEventListener("click")
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.searchBtn.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    //cars: store list cars yang sudah difilter : [{}]
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
