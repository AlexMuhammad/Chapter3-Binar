class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card">
      <img src="${this.image}" class="card-img-top mx-auto my-4" style="width:300px; height:200px" alt="${this.manufacture}>
      <div class="card-body">
        <p class="card-text fw-semibold px-4">${this.type}</p>
        <h6 class="card-title fw-bold px-4">Rp ${this.rentPerDay} / hari</h6>
        <p class="card-text px-4 py-2">${this.description}</p>
        <div class="d-flex gap-2 px-4">
          <img src="../images/people.svg" style="width:24px; height:24px"/>
          <p>${this.capacity} Orang</p>
        </div>
        <div class="d-flex gap-2 px-4">
          <img src="../images/gear.svg" style="width:24px; height:24px"/>
          <p>${this.transmission}</p>
        </div>
        <div class="d-flex gap-2 px-4">
          <img src="../images/calendar.svg" style="width:24px; height:24px"/>
          <p>Tahun ${this.year}</p>
        </div>
      </div>
    </div>
    `;
  }
}
