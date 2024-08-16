/**
 *
 */
export default {
  // buildVersion: process.env.X_WEB_BUILD_VERSION || "demoVersion",
  /**
   * Defines the app release number that is deployed on particular environment.
   */
  // releaseNumber: process.env.X_WEB_RELEASE_NUMBER,
  /**
   * Defines the base url of the application
   */
  baseUrl: "/mapboxApp",

  /**
   * Defines application keycloak configuration
   *
   * realm- Name of the realm
   * ssl-required- Ensures that all communication to and from the Keycloak server is over HTTPS
   * resource- The client-id of the application
   * public-client- If set to true, the adapter will not send credentials for the client to Keycloak
   * confidential-port- confidential port used by the Keycloak server for secure connections
   * clientId- application name
   * url- The base URL of the Keycloak server
   */
  keycloakSetting: {
    realm: import.meta.env.XWEB_KEYCLOAK_REALM,
    "ssl-required": import.meta.env.XWEB_KEYCLOAK_SSL_REQUIRED,
    // resource: import.meta.env.XWEB_KEYCLOAK_RESOURCE,
    "public-client": import.meta.env.XWEB_KEYCLOAK_PUBLIC_CLIENT,
    // "confidential-port": import.meta.env.XWEB_KEYCLOAK_CONFIDENTIAL_PORT,
    clientId: import.meta.env.XWEB_KEYCLOAK_CLIENT_ID,
    url: import.meta.env.XWEB_KEYCLOAK_URL,
  },
};
