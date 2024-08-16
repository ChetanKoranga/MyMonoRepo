import devEnvironment from "./environment.dev";
// import stageEnvironment from "./environment.stage";
// import qaEnvironment from "./environment.qa";
import prodEnvironment from "./environment.prod";
import commonEnvironment from "./common";
// import APP_CONSTANTS from "../../data/constants/app";

export default ((options) => {
  const environment = options ?? "development";
  const ENV = { environment };

  if (environment === "development") {
    Object.assign(ENV, devEnvironment);
  }

  if (environment === "production") {
    Object.assign(ENV, prodEnvironment);
  }

  //   if (environment === APP_CONSTANTS.ENVIRONMENT.QA) {
  //     Object.assign(ENV, qaEnvironment);
  //   }

  //   if (environment === APP_CONSTANTS.ENVIRONMENT.STAGE) {
  //     Object.assign(ENV, stageEnvironment);
  //   }

  return Object.assign(ENV, commonEnvironment);
  // eslint-disable-next-line no-undef
})(import.meta.env.MODE);
