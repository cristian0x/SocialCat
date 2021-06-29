import React from "react";
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  RegisterAuthAction,
  LoginAuthAction,
} from "../redux/actions/AuthAction";
import store from "../redux/store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="wrapper fadeInDown" id="wrapper">
        <div id="formContent">
          <button id="btns" onClick={this.showLoginBox.bind(this)}>
            <h2
              className={
                this.state.isLoginOpen ? "active" : "inactive underlineHover"
              }
            >
              {" "}
              Sign In{" "}
            </h2>
          </button>
          <button id="btns" onClick={this.showRegisterBox.bind(this)}>
            <h2
              className={
                this.state.isRegisterOpen ? "active" : "inactive underlineHover"
              }
            >
              {" "}
              Sign Up{" "}
            </h2>
          </button>
          <div className="fadeIn first">
            <img src="/assets/catLogoBlack1.png" id="icon" alt="User Icon" />
          </div>

          {this.state.isLoginOpen && <LoginBox props={this.props} />}
          {this.state.isRegisterOpen && <RegisterBox props={this.props} />}

          <div id="formFooter">
            <a
              className="underlineHover"
              style={{ textDecoration: "none" }}
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: [],
      pwdState: null,
      redirect: null,
      userState: {},
      submit: false,
    };
  }

  showValidationErr(elem, msg) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elem, msg }],
    }));
  }

  clearValidationErr(elem) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elem != err.elem) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 8) {
      this.setState({ pwdState: "medium" });
    } else if (e.target.value.length > 12) {
      this.setState({ pwdState: "strong" });
    }
  }

  submitRegister(e) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    e.preventDefault();
    if (this.state.username == "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    } else if (this.state.email == "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    } else if (!pattern.test(this.state.email)) {
      this.showValidationErr("password", "Something is wrong!");
    } else if (this.state.password == "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    } else {
      //e.preventDefault();

      let opts = {
        email: this.state.email,
        password: this.state.password,
      };
      /*
    fetch("http://127.0.0.1:5000/sign-up", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(opts),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
      */

      this.setState({ userState: opts });

      this.setState({ submit: true });

      const { register } = this.props.props;
      register(opts);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    let usernameErr = null,
      passwordErr = null,
      emailErr = null;

    for (let err of this.state.errors) {
      if (err.elem == "username") {
        usernameErr = err.msg;
      }
      if (err.elem == "password") {
        passwordErr = err.msg;
      }
      if (err.elem == "email") {
        emailErr = err.msg;
      }
    }

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState == "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState == "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState == "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
      <form id="loginForm">
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="login"
          value={this.username}
          onChange={this.onUsernameChange.bind(this)}
        />
        <small className="danger-error" style={{ color: "red" }}>
          {usernameErr ? usernameErr : ""}
        </small>
        <input
          type="text"
          id="email"
          className="fadeIn third"
          name="email"
          placeholder="email"
          value={this.email}
          onChange={this.onEmailChange.bind(this)}
        />
        <br />
        <small className="danger-error" style={{ color: "red" }}>
          {emailErr ? emailErr : ""}
        </small>
        <input
          type="password"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="password"
          value={this.password}
          onChange={this.onPasswordChange.bind(this)}
        />
        <small className="danger-error" style={{ color: "red" }}>
          {passwordErr ? passwordErr : ""}
        </small>
        <br />
        {this.state.password && (
          <div className="password-state">
            <div className={"pwd pwd-weak" + (pwdWeak ? "show" : "")}></div>
            <div className={"pwd pwd-medium" + (pwdMedium ? "show" : "")}></div>
            <div className={"pwd pwd-strong" + (pwdStrong ? "show" : "")}></div>
          </div>
        )}
        <input
          type="submit"
          className="fadeIn fourth"
          value="Log In"
          onClick={this.submitRegister.bind(this)}
        />
      </form>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  showValidationErr(elem, msg) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elem, msg }],
    }));
  }

  clearValidationErr(elem) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elem != err.elem) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("password");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  submitLogin(e) {
    e.preventDefault();

    let opts = {
      //username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    /*
    fetch("http://127.0.0.1:5000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(opts),
    })
      .then((response) => response.json())
      .then((response) =>
        localStorage.setItem("jwtToken", response.access_token)
      )
      .catch((error) => localStorage.setItem("authError", error));
    */

    const { login } = this.props.props;
    login(opts);

    const state = store.getState();

    if (!this.props.props.isLoggedIn) {
      this.showValidationErr(
        "password",
        "Something is wrong! Please try again."
      );
    }

    //local storage
    //redirecting
    //error handling
  }

  render() {
    let passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elem == "password") {
        passwordErr = err.msg;
      }
    }

    return (
      <form id="loginForm">
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="login"
          value={this.email}
          onChange={this.onEmailChange.bind(this)}
        />
        <input
          type="password"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="password"
          value={this.password}
          onChange={this.onPasswordChange.bind(this)}
        />
        <small className="danger-error" style={{ color: "red" }}>
          {passwordErr ? passwordErr : ""}
        </small>
        <input
          type="submit"
          className="fadeIn fourth"
          value="Log In"
          onClick={this.submitLogin.bind(this)}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (userState) => {
      dispatch(RegisterAuthAction(userState));
    },
    login: (userState) => {
      dispatch(LoginAuthAction(userState));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
