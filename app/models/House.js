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

  get availStatus() {
    if (this.isAvailable) {
      return 'Currently Available'
    }
    return 'Currently Unavailable'
  }

  get houseHTMLTemplate() {
    return `
    <div class="col-12">
          <div class="shadow bg-light d-flex mb-4">
            <img
              src="${this.imgUrl}"
              alt="House" class="car-img">
            <div class="p-3 flex-grow-1">
              <h3>${this.address}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fs-3">$${this.price.toLocaleString('en-US')}</p>
                  <p>Square Footage: ${this.squareFootage.toLocaleString('en-US')} ft</p>
                  <div class="d-flex gap-2 align-items-center">
                    <span>Bds: ${this.bedrooms}</span>
                    <span>Bths: ${this.bathrooms}</span>
                  </div>
                </div>
                <div class="fs-5">
                  <p>${this.availStatus}</p>
                </div>
              </div>
              <div class="text-end">
                <button class="btn btn-outline-danger">Delete House</button>
              </div>
            </div>
          </div>
        </div>
    `
  }
}