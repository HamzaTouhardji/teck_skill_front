import axios from 'axios'
import authHeader from './headerService';

const USER_API_BASE_URL = "http://localhost:8080/api/user/users"
const API_URL = 'http://localhost:8080/api/test/';

class UsersService {

    /* MODULE CRUD  */
    getUser() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }


    /* MODULE AUTHENTIFICATION */
    getPublicContent() {
        return axios.get(API_URL + 'all');
      }
    
      getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
      }
    
      getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
      }
    
      getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
      }
}
export default new UsersService()