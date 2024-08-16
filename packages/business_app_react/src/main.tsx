import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Keycloak from "keycloak-js";
import { authenticationService } from "./services";
import environment from "./config/environment";
import { restoreSession } from "./redux/slices/sessionSlice/sessionSlice";
import LoadingIndicator from "./components/ui/LoadingIndicator/LoadingIndicator";
import { showLoader } from "./redux/slices/commonSlice/commonSlice";

const root = createRoot(document.getElementById("root") as HTMLElement);

async function initializeKeycloak(store: any) {
  console.log("environment===>>> ", environment);

  return new Promise<void>((resolve, reject) => {
    const kc = new Keycloak(environment.keycloakSetting);
    kc.init({
      onLoad: "login-required",
      pkceMethod: "S256",
      checkLoginIframe: true,
    })
      .then((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          window.location.reload();
        } else {
          authenticationService.keycloak = kc;
          authenticationService.isAuthenticated = isAuthenticated;
          authenticationService.token = {
            accessToken: kc.token || null,
            idToken: kc.idToken || null,
            refreshToken: kc.refreshToken || null,
          };
          store.dispatch(restoreSession({}));
          resolve();
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

function renderApp(store: any) {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function renderLoadingIndicator(store: any) {
  root.render(
    <Provider store={store}>
      <LoadingIndicator />
    </Provider>
  );
}

function onError(reason: any) {
  console.error("keycloak initialize failed: ", reason);
  root.render(<div>ERROR ERROR ERROR</div>);
}

function loadApp() {
  const store = configureStore();
  store.dispatch({ type: showLoader.type });
  renderLoadingIndicator(store);
  initializeKeycloak(store)
    .then(() => renderApp(store))
    .catch((error) => onError(error));
}

loadApp();
