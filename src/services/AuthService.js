import jwt_decode from 'jwt-decode';

// import Helper
import CommonHelper from '../Helper/Common';

class AuthService {

  access_token;

  constructor() {
    this.access_token = localStorage.getItem('access_token');
  }
  
  /**
   * Get Access Token
   */

  getAccessToken() {
    return this.access_token;
  }

  /**
   * Set Access Token
   * @param {String} token Access Token
   */
  setAccessToken(token) {
    localStorage.setItem('access_token', token);
    this.access_token = token;
  }

  isAuthorized() {
    if (!CommonHelper.isEmpty(this.access_token)) {
      const token = jwt_decode(this.access_token);
      if (token.exp > Date.now() / 1000) return true;
      return false;
    } else {
      return false;
    }
  }
}

export default new AuthService();