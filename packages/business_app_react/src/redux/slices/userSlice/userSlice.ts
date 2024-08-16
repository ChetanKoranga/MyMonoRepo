import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sliceName } from "../sliceName";
import { initialState } from "../../initialState";

// Define the state interface
interface userState {
  first: string;
  last: string;
  email: string;
  isLoggedIn: boolean;
}

// Define the initial state
const initialUserState: userState = initialState.user;

const userSlice = createSlice({
  initialState: initialUserState,
  name: sliceName.USER,
  reducers: {
    loggedIn: (state, action: PayloadAction<Record<string, any>>) => {
      state.isLoggedIn = true;
      return {
        ...state,
        email: action.payload.email,
        first: action.payload.firstName,
        last: action.payload.lastName,
      };
      // state.email = action.payload.email;
      // state.first = action.payload.firstName;
      // state.last = action.payload.lastName;
    },
  },
});
export const { loggedIn } = userSlice.actions;
export default userSlice.reducer;
