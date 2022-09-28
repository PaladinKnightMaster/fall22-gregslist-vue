import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { SandboxApi } from "./AxiosService.js"

class CarsService {
  async getCars() {
    const res = await SandboxApi.get('api/cars')

    AppState.cars = res.data.map(c => new Car(c))

  }
}

export const carsService = new CarsService()

