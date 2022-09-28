import Axios from 'axios'
import { baseURL } from '../env'
export const SandboxApi = Axios.create({
  baseURL,
  timeout: 8000
})
