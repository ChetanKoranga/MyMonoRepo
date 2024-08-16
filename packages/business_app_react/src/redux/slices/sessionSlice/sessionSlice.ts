import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sliceName } from "../sliceName";
import { initialState } from "../../initialState";

// Define the state interface
interface SessionState {
  currentTheme: string;
  isAuthenticated: boolean;
  token: null | string; // Adjust the type of token to allow null or string
  currentUser: Record<string, any>; // Adjust the type of currentUser
  hasCheckedSession: boolean;
  error: Record<string, any>; // Adjust the type of error
}

// Define the initial state
const initialSessionState: SessionState = initialState.session;

const sessionSlice = createSlice({
  initialState: initialSessionState,
  name: sliceName.SESSION,
  reducers: {
    checkSessionSuccess: (
      state,
      action: PayloadAction<Partial<SessionState>>
    ) => {
      // Update state based on the action payload
      return { ...state, ...action.payload };
    },
    setCurrentTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
    restoreSession: (state, action: PayloadAction<Partial<SessionState>>) => {
      return { ...state, ...action.payload };
    },
    loginFailure: (state, action: PayloadAction<Record<string, any>>) => {
      state.error = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<Record<string, any>>) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    login: () => {},
    logout: () => {
      // Reset the state to initial state
      return initialSessionState;
    },
  },
});

export const {
  checkSessionSuccess,
  setCurrentTheme,
  restoreSession,
  loginFailure,
  setCurrentUser,
  login,
  logout,
} = sessionSlice.actions;
export default sessionSlice.reducer;
