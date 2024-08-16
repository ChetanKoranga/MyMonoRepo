export const initialState = {
  common: {
    loadingIndicator: {
      isLoading: false,
    },
  },
  session: {
    currentTheme: "DEFAULT",
    isAuthenticated: false,
    token: null,
    currentUser: {},
    hasCheckedSession: false,
    error: {},
  },
  user: {
    first: "",
    last: "",
    email: "",
    isLoggedIn: false,
  },
};
