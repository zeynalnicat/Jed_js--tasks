class Car {
  constructor(model, year, owner) {
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.deceleration = () => {
      console.log(`${owner} ${model} markali masinini yavasladir`);
    };
    this.acceleration = () => {
      console.log(`${owner} ${model} markali masinini suretlendirir`);
    };
  }
}
const vehicle = new Car("Tesla", "2019", "Nicat");
vehicle.deceleration();
vehicle.acceleration();
