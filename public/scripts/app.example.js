class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputCapacity = document.getElementById("inputCapacity")
    this.searchBtn = document.getElementById("searchBtn")
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.searchBtn.onclick = this.search;
  }

  search = async (e) => {
    this.clear()
    e.preventDefault()
    const dateValue = this.inputDate.value;
    const capacityValue = this.inputCapacity.value;
    const timeValue = this.inputTime.value;

    const datetime = new Date(`${timeValue} ${dateValue}`)
    // console.log(datetime)

    if (!capacityValue || !dateValue || !timeValue) {
      alert("Harus Mengisi Input")
    }
    const filtering = (car) => {
      const availableFiltering = car.availableAt > datetime;
      const capacityFiltering = car.capacity > capacityValue;

      return availableFiltering && capacityFiltering
    }

    const cars = await Binar.listCars(filtering);
    Car.init(cars);

    if (cars.length === 0) {
      const node = document.createElement("div");
      node.innerHTML = "Tidak ada datanya bang";
      this.carContainerElement.appendChild(node);
    } else {
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.className = "col-4";
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.className = "col-4";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    // const capacity = 5
    // const filtering = (car) => {
    //   return car.capacity > capacity
    // }
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
