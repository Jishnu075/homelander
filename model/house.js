class House {
  constructor(price, sqft, beds, baths, age, acres, taxes) {
    (this.price = Number(price)),
      (this.sqft = Number(sqft)),
      (this.beds = Number(beds)),
      (this.baths = Number(baths)),
      (this.age = Number(age)),
      (this.acres = Number(acres)),
      (this.taxes = Number(taxes));
  }
}
export { House };
