export default {
  environment: "dev",
  mapboxAccessToken: import.meta.env.XWEB_MAPBOX_ACCESS_KEY,
  network: {
    host: import.meta.env.XWEB_PLATFORM_URL,
    namespaces: {
      v1: "",
    },
  },
  // network: {
  //   host: process.env.X_WEB_PLATFORM_URL,
  //   namespaces: {
  //     v1: "",
  //   },
  // },
  // i18n: {
  //   debug: true,
  // },
  // /**
  //  * Defines logger configuration -
  //  *
  //  * disableExceptionHandling - If `true`, application logging will be disabled.
  //  * serverEndPoint: Defines the server endpoint where application logs will be sent for all supported log levels (info, error)
  //  * extraLogging: This will enable extra logs information for the application
  //  *    additionalInfo - This will log API and page information along with the exception
  //  *    requestPayload - This will add request body payload in the logs for API failures. By default, it is set to false.
  //  */
  // logger: {
  //   disableExceptionHandling: false,
  //   serverEndPoint: {
  //     info: "log/info",
  //     error: "log/error",
  //   },
  //   extraLogging: {
  //     additionalInfo: true,
  //     requestPayload: false,
  //   },
  // },
  // /**
  //  * Defines application cache configuration -
  //  *
  //  * secretKey - This is required to encrypt/decrypt sensitive information that will be saved in the browser's storages
  //  *
  //  * eg -
  //  * localStorage, sessionStorage, cookies etc.
  //  */
  // cache: {
  //   siteCache: {
  //     secretKey: "5d3a5da0-03c6",
  //   },
  // },

  // /**
  //  * Defines application keycloak configuration
  //  *
  //  * realm- Name of the realm
  //  * ssl-required- Ensures that all communication to and from the Keycloak server is over HTTPS
  //  * resource- The client-id of the application
  //  * public-client- If set to true, the adapter will not send credentials for the client to Keycloak
  //  * confidential-port- confidential port used by the Keycloak server for secure connections
  //  * clientId- application name
  //  * url- The base URL of the Keycloak server
  //  */
  // keycloakSetting: {
  //   realm: process.env.X_WEB_KEYCLOAK_REALM,
  //   "ssl-required": process.env.X_WEB_KEYCLOAK_SSL_REQUIRED,
  //   resource: process.env.X_WEB_KEYCLOAK_RESOURCE,
  //   "public-client": process.env.X_WEB_KEYCLOAK_PUBLIC_CLIENT,
  //   "confidential-port": process.env.X_WEB_KEYCLOAK_CONFIDENTIAL_PORT,
  //   clientId: process.env.X_WEB_KEYCLOAK_CLIENT_ID,
  //   url: process.env.X_WEB_KEYCLOAK_URL,
  // },
};
