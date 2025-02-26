import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {

  createHouse(houseData) {

    const newHouse = new House(houseData)

    const houses = AppState.houses
    houses.push(newHouse)
  }

}


export const housesService = new HousesService()