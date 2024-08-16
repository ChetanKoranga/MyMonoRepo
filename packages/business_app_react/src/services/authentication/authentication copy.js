/**
 * Singleton class that provided instance methods to perform user's authentication operations.
 * Recommended service for all user authentication related operations that are required by the application.
 *
 * @example
 * import { authenticationService } from './service';
 *
 * authenticationService.loadUserProfile();// initialize user details
 */
class AuthenticationService {
    token = null;
  
    isAuthenticated = false;
  
    keycloak = null;
  
    /**
     * This method will be called when unauthenticated user will run the application.
     * it will redirect to redirectUri after successful login.
     */
    login() {
      const redirectUri = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
      this.keycloak.login({ redirectUri });
    }
  
    /**
     * Signs off a currently signed on user.
     */
    logout() {
      const redirectUri = `${window.location.protocol}//${window.location.host}/reliabilitymanager`;
      const logoutURL = this.keycloak.createLogoutUrl({ redirectUri });
      window.location = logoutURL;
    }
  
    /**
     * This method will initialize current user details.
     */
    loadUserProfile() {
      return this.keycloak.loadUserProfile();
    }
  
    getToken() {
      return new Promise((resolve, reject) => {
        if (!this.keycloak) {
          reject(new Error('Keycloak is not initialized.'));
        }
        const { keycloak } = this;
        keycloak
          .updateToken()
          .then(() => {
            this.token = {
              accessToken: keycloak.token,
              idToken: keycloak.idToken,
              refreshToken: keycloak.refreshToken
            };
            resolve(keycloak.token);
          })
          .catch((error) => {
            // If the token is blank, that means we need to re-authenticate
            // we automatically do this here, since the layers don't have the logic/knowledge to do this themselves.
            this.login();
            reject(error);
          });
      });
    }
  }
  
  /**
   * Instance of AuthenticationService class is exported.
   *
   * This object lives for the duration of the application, and can be made available in different parts
   * of your application.
   */
  export default new AuthenticationService();
  