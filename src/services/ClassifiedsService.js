import { AppState } from "../AppState.js"
import { Classified } from "../models/Classified.js"
import { SandboxApi } from "./AxiosService.js"

class ClassifiedsService {

  async getClassifieds() {
    const res = await SandboxApi.get('api/classifieds')
    AppState.classifieds = res.data.map(c => new Classified(c))
  }


  async deleteClassified(id) {
    const res = await SandboxApi.delete(`api/classifieds/${id}`)
    // CAKE SAUCE strawberry middle 🍓
    AppState.classifieds = AppState.classifieds.filter(c => c.id != id)

  }

  async getClassifiedById(id) {
    const res = await SandboxApi.get(`/api/classifieds/${id}`)
    AppState.activeClassified = new Classified(res.data) // Not a POJO!!!
  }


  async createClassified(formData) {
    const res = await SandboxApi.post('/api/classifieds', formData)
    AppState.classifieds.push(new Classified(res.data))
    // AppState.classifieds = [...AppState.classifieds, new Classified(res.data)]
  }


}

export const classifiedsService = new ClassifiedsService()
