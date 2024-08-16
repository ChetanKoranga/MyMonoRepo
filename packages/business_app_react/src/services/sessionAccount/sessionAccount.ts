// import { sessionStorageService, siteCacheService, httpService } from '..';
// import { httpService } from "..";
// import { APP_CONSTANTS, API_CONSTANTS } from "../../constants";
// import { API_CONSTANTS } from "../../data/constants";

/**
 * Singleton class that provided instance methods to perform user's session operations.
 * Recommended service for all user session related operations that are required by the application.
 *
 * @example
 * import { sessionAccountService } from './service';
 *
 * sessionAccountService.setCurrentTheme("DEFAULT");
 * sessionAccountService.getCurrentTheme(); // "DEFAULT"
 */
class SessionAccountService {
  /**
   * Defined the current theme for the user sessions.
   */
  currentTheme: string | null = null;

  /**
   * Defined the current user info and permissions for the user sessions.
   */
  currentUser: any | null = null;

  /**
   * Sets the current theme for the user sessions.
   *
   * @param {String} theme - Theme constant value defined in src/constants/app/index.js. (DEFAULT|DARK)
   */
  setCurrentTheme(theme: string): void {
    this.currentTheme = theme;
  }

  /**
   * Return the current theme for the user sessions.
   */
  getCurrentTheme(): string | null {
    return this.currentTheme;
  }

  /**
   * This method clear the previous transition value from the session storage.
   */
  // clearPreviousTransition() {
  //   sessionStorageService.clearStorage();
  // }

  /**
   * Defined the primary cache for the user session, this cache will not be deleted when the browser is closed,
   * and will be available the next day, week, or year until it met the desired expiry defined in
   * environment config file.
   *
   * @param  {Object} data - Cache data that need to be saved in primary cache.
   */
  // setPrimaryCache(data) {
  //   return siteCacheService.setPrimaryCache(data);
  // }

  /**
   * This method allows you to retrieve primary cache data.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the primary cache
   * from local storage.
   */
  // getPrimaryCache() {
  //   return siteCacheService.getPrimaryCache();
  // }

  /**
   * This method allows you to retrieve session tracing Id.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the session tracing cache
   * from local storage.
   */
  // getUserTracingId() {
  //   const sessionTracingCache = siteCacheService.getSessionTracingCache() || {};

  //   return sessionTracingCache.tracingId;
  // }

  /**
   * Defined the tracing cache for the user session.
   * In general it is used for tracing user session information for building correlationId.
   *
   * @param  {Object} tracingId - Tracing Id generated from logging utils.
   */
  // setUserTracingId(tracingId) {
  //   const sessionTracingCache = siteCacheService.getSessionTracingCache() || {};

  //   sessionTracingCache.tracingId = tracingId;

  //   return siteCacheService.setSessionTracingCache(sessionTracingCache);
  // }

  /**
   * This method allows you to retrieve user session Id.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the user session cache
   * from local storage.
   */
  // getUserSessionId() {
  //   const sessionCache = siteCacheService.getSessionCache() || {};

  //   return sessionCache.sessionId;
  // }

  /**
   * Defined the user session id cache for the user session.
   * In general it is used for unique user session information for building correlationId.
   *
   * @param  {Object} sessionId - User Session Id generated from logging utils.
   */
  // setUserSessionId(sessionId) {
  //   const sessionCache = siteCacheService.getSessionCache() || {};

  //   sessionCache.sessionId = sessionId;

  //   return siteCacheService.setSessionCache(sessionCache);
  // }

  /**
   * Load user permission required for setting up the authorization rules for the application.
   * @return {response} - response with all the permission user has.
   */
  // loadUserPermissions() {
  //   return httpService.get(API_CONSTANTS.USER.PERMISSION);
  // }

  /**
   * Defined the current user details for the user session.
   *
   * @param  {Object} currentUser - User Details with user permission.
   */
  setCurrentUser(currentUser: any): void {
    this.currentUser = currentUser;
  }

  /**
   * This method allows you to retrieve user details with user permissions.
   *
   */
  getCurrentUser(): any | null {
    return this.currentUser;
  }

  /**
   * This method checks if user has permission to view the page.
   * @param  {string} app- application name for which user has permission
   * @returns if user has permission then return true or false
   */
  hasAppPermission(app: string): boolean {
    if (this.currentUser) {
      const apps = this.currentUser.userPermissions.applications || [];

      return apps.includes(app);
    }

    return false;
  }
}

/**
 * Instance of SessionAccountService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different parts
 * of your application.
 */
export default new SessionAccountService();