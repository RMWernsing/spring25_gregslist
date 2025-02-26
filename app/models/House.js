import { generateId } from "../utils/GenerateId.js"

export class House {

  constructor(data) {

    this.id = generateId()
    this.year = data.year
    this.price = data.price
    this.squareFootage = data.squareFootage
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.address = data.address
    this.isAvailable = data.isAvailable
    this.imgUrl = data.imgUrl

  }
}