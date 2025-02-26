import { AppState } from "../AppState.js";

export class HousesController {
  constructor() {
    console.log('Houses Controller is working');
    this.drawHouses()

  }

  drawHouses() {
    const houses = AppState.houses

    let housesCardContent = ''

    houses.forEach(house => housesCardContent += house.houseHTMLTemplate)

    const houseCardElem = document.getElementById('houseListing')
    houseCardElem.innerHTML = housesCardContent
  }
}