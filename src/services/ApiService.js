import Axios from 'axios';
import AuthService from './AuthService';

class ApiService {
  constructor() {}

  /**
   * Send Post Api Request
   */
  postRequest(url, payload) {
    return Axios.post(url, payload);
  }

  /**
   * Send Get Api Request
   */
  getRequest(url) {
    return Axios.get(url);
  }

  /**
   * Send Post Api Request with Authorized Header
   */
  postAuthorizedRequest(url, payload) {
    return Axios.post(url, payload, { headers: this.authHeader() });
  }

  /**
   * Send Post Multi-Part Api Request with Authorized Header
   */
   postMultiPartAuthorizedRequest(url, payload) {
    return Axios.post(url, payload, { headers: Object.assign({}, this.authHeader(), {'content-type': 'multipart/form-data'})});
  }

  /**
   * Send Post Api Request with Authorized Header
   */
  getAuthorizedRequest(url) {
    return Axios.get(url, { headers: this.authHeader() });
  }

  /**
   * Send Delete Api Request with Authorized Header
   * @returns 
   */
   deleteAuhorizedRequest(url) {
     return Axios.delete(url, {headers: this.authHeader()});
   }

  /**
  * Send Patch Api Request with Authorized Header
  * @returns 
  */
  patchAuthorizedRequest(url, payload) {
    return Axios.patch(host_url + url, payload, { headers: this.authHeader()});
  }

  /**
   * Get AuthHeader if available
   */
  authHeader() {
    const token = AuthService.getAccessToken();
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }

  /**
   * Logout the user
   */
  logout(_this) {
    localStorage.removeItem('access_token');
    _this.$router.push('/');
  }
}

export default new ApiService();