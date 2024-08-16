// import random from "lodash/random";
// import floor from "lodash/floor";
// import isEmpty from "lodash/isEmpty";
// // import { domainAccess } from "./domainAction";

class CommonUtil {
  static getUuid() {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }
  //   static wait(milliseconds) {
  //     return new Promise((resolve) => setTimeout(resolve, milliseconds));
  //   }
  //   static scrollToTop() {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  //   static timestamp = () => new Date().getTime();
  //   static isOnClient = () => typeof window !== "undefined";
  //   static isOnServer = () => typeof window === "undefined";
  //   static isOnMobile = () => {
  //     const userAgent =
  //       typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  //     return Boolean(userAgent.match(/iPhone|Android|iPod|Opera Mini|IEMobile/i));
  //   };
  //   static isOnAndroid = () => {
  //     return navigator.userAgent.match(/Android/i);
  //   };
  //   static isOnIOS = () => {
  //     return navigator.userAgent.match(/iPhone/i);
  //   };
  //   // This function will return the translation params
  //   // FMIDs of {{4567}} will be linked to {{1234}} and {{890}} is linked to other asset models.
  //   // It will extract the params from the string and return as {param_0:4567,param_1:1234,param_2:890}
  //   static notificationMessageHandler = (message) => {
  //     let translationParams = {};
  //     const translationParamsRegex = new RegExp("[^{{]+(?=}})", "g"); // NOSONAR
  //     try {
  //       const messageParams = [...message.match(translationParamsRegex)];
  //       if (messageParams) {
  //         messageParams.forEach((_key, i) => {
  //           translationParams[`param_${i}`] = messageParams[i];
  //         });
  //       }
  //     } catch {
  //       translationParams = {};
  //     }
  //     return translationParams;
  //   };
  //   /**
  //    * application list from permission api
  //    * @param {object} user permission from api response
  //    * @returns {object} formatted application list.
  //    */
  //   static applicationsList = ({ data }) => {
  //     if (isEmpty(data)) {
  //       return null;
  //     }
  //     return data?.applications?.map((item) => item.code);
  //   };
  //   /**
  //    * application list from permission api
  //    * @param {object} user permission from api response
  //    * @returns {boolean} returns true assetbrowser permission is there.
  //    */
  //   static hasAssetRM = ({ data }) => {
  //     if (isEmpty(data)) {
  //       return false;
  //     }
  //     return data?.domains?.some((item) => item.name === "assetbrowser");
  //   };
  //   /**
  //    * Parse JWT Token
  //    * @param {string} token from api response
  //    * @returns {object} Parsed object from Token.
  //    */
  //   static parseJwt = (token) => {
  //     const base64Url = token.split(".")[1];
  //     const base64 = base64Url.replace("-", "+").replace("_", "/");
  //     return JSON.parse(window.atob(base64));
  //   };
  //   /**
  //    * Format roles to permissions
  //    * @param {object} roles from resource access of token
  //    * @returns {object} formatted permission.
  //    */
  //   // static formatRoles = ({ roles }) => {
  //   //   const formattedRoles = {};
  //   //   if (!Array.isArray(roles)) return null;
  //   //   roles.forEach((role) => {
  //   //     const dsr = role.split("-").map((item) => domainAccess[item]);
  //   //     if (!formattedRoles[dsr[0]]) {
  //   //       formattedRoles[dsr[0]] = {};
  //   //     }
  //   //     if (!Array.isArray(formattedRoles[dsr[0]][dsr[1]])) {
  //   //       formattedRoles[dsr[0]][dsr[1]] = [];
  //   //     }
  //   //     formattedRoles[dsr[0]][dsr[1]].push(dsr[2]);
  //   //   });
  //   //   return formattedRoles;
  //   // };
  //   static getSubDomainsFormat(subdomains) {
  //     const subDomains = {};
  //     subdomains.forEach((itm) => {
  //       subDomains[itm.name] = itm.actions.map((act) => act.name);
  //     });
  //     return subDomains;
  //   }
  //   static dynamicAttributeKeyConversion = (key) => {
  //     return key.split(".").join("$");
  //   };
}

export default CommonUtil;
