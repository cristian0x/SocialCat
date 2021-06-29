import axios from "axios";
import history from "../../history";
//import { useNavigate } from "react-router-dom";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("GET", "POST", "OPTIONS");

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
};

/*
function redirectToPath(path) {
  let navigate = useNavigate();
  navigate(path);
}
*/

const RegisterAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/sign-up",
        userState,
        {
          headers: { headers },
        }
      );
      console.log("responseRegister", response);
      const { data } = response;
      if (response.data === "Account already exists") {
        dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
      } else {
        dispatch({
          type: AuthActionType.REGISTER_SUCCESS,
          payload: data,
        });
      }
      history.push("/home");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
    }
  };
};

const LoginAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        userState,
        {
          headers: { headers },
        }
      );
      console.log("responseLogin", response);
      const { data } = response;
      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: data,
      });
      history.push("/home");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

const LogoutAuthAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/logout");
      console.log("responseLogout", response);
      const { data } = response;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data,
      });
      //history.push("/");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGOUT_FAIL, payload: {} });
    }
  };
};

export {
  RegisterAuthAction,
  AuthActionType,
  LoginAuthAction,
  LogoutAuthAction,
};
