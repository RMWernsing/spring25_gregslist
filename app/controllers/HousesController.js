import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
  constructor() {
    this.drawHouses()
    AppState.on('houses', this.drawHouses)
  }

  drawHouses() {
    const houses = AppState.houses

    let housesCardContent = ''

    houses.forEach(house => housesCardContent += house.houseHTMLTemplate)

    const houseCardElem = document.getElementById('houseListing')
    houseCardElem.innerHTML = housesCardContent
  }

  createHouseListing() {
    event.preventDefault()

    let form = event.target

    const houseData = getFormData(form)
    console.log(houseData);

    housesService.createHouse(houseData)

    console.log(AppState.houses);


  }
}