import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";

const authState = {
  isLoggedIn: false,
  user: {
    access_token: "",
  },
};

const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    const { access_token } = authobj.user;
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    return authobj;
  } catch (error) {
    return authState;
  }
};
console.log("getAuthState: ", getAuthState());

const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      const newAuthStateRegister = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.access_token}`;
      localStorage.setItem("auth", JSON.stringify(newAuthStateRegister));
      return newAuthStateRegister;
    case AuthActionType.REGISTER_FAIL:
      return state;
    case AuthActionType.LOGIN_SUCCESS:
      const newAuthStateLogin = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.access_token}`;
      localStorage.setItem("auth", JSON.stringify(newAuthStateLogin));
      return newAuthStateLogin;
    case AuthActionType.LOGIN_FAIL:
      return state;
    case AuthActionType.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return authState;
    case AuthActionType.LOGOUT_FAIL:
      localStorage.removeItem("auth");
      return authState;
    default:
      return state;
  }
};

export default authReducer;
