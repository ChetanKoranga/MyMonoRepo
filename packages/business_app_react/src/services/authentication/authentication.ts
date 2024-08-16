class AuthenticationService {
  token: {
    accessToken: string | null;
    idToken: string | null;
    refreshToken: string | null;
  } | null = null;

  isAuthenticated = false;
  keycloak: Keycloak.KeycloakInstance | null = null;

  login(): void {
    const redirectUri = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    if (this.keycloak) {
      this.keycloak.login({ redirectUri });
    }
  }

  logout(): void {
    const redirectUri = `${window.location.protocol}//${window.location.host}/reliabilitymanager`;
    if (this.keycloak) {
      const logoutURL = this.keycloak.createLogoutUrl({ redirectUri });
      window.location.href = logoutURL;
    }
  }

  loadUserProfile(): Promise<Keycloak.KeycloakProfile> {
    if (this.keycloak) {
      return this.keycloak.loadUserProfile();
    }
    return Promise.reject(new Error("Keycloak is not initialized."));
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!this.keycloak) {
        reject(new Error("Keycloak is not initialized."));
        return;
      }

      this.keycloak
        .updateToken()
        .then(() => {
          if (this.keycloak) {
            this.token = {
              accessToken: this.keycloak.token || null,
              idToken: this.keycloak.idToken || null,
              refreshToken: this.keycloak.refreshToken || null,
            };
            resolve(this.keycloak.token || "");
          } else {
            reject(new Error("Keycloak is not initialized."));
          }
        })
        .catch((error) => {
          this.login();
          reject(error);
        });
    });
  }
}

export default new AuthenticationService();
