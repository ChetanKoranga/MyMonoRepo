import common from "./slices/commonSlice/commonSlice";
import session from "./slices/sessionSlice/sessionSlice";
import user from "./slices/userSlice/userSlice";
export const rootReducer = {
  common,
  session,
  user,
};
