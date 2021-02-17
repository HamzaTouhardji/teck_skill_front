import axios from 'axios'
import codeHeaderService from './CodeheaderService';


const USER_API_BASE_URL = "http://localhost:8080/api/code"

class CodeService {

  sendCode(code) {
    return axios
      .post(USER_API_BASE_URL + "all", {
        code
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }


  getCode() {
      return axios.get(USER_API_BASE_URL + '/all', { headers: codeHeaderService() });
  }
}
export default new CodeService()