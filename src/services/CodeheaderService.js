export default function codeHeader() {
    const code = JSON.parse(localStorage.getItem('code'));
  
    if (code && code.accessToken) {
      return { Authorization: 'Bearer ' + code.accessToken }; // for Spring Boot back-end
      //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }