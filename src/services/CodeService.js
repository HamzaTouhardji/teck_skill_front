import axios from 'axios'
import codeHeaderService from './CodeheaderService';


const USER_API_BASE_URL = "http://localhost:8080/api/code"

class CodeService {
  getCode() {
      return axios.get(USER_API_BASE_URL + '/all', { headers: codeHeaderService() });
  }
}
export default new CodeService()