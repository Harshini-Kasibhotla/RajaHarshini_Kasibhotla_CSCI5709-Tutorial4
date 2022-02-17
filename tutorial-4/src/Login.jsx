import React, { Component } from "react";
import "./styles.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errorMsg: "" };
  }

  handleChange = (event) => {
    if (event.target.name === "username") {
      console.log("inside change");
      this.setState({ username: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.username,
      password: this.state.password,
    };
    console.log("inside handle submit");
    axios
      .post("https://tutorial4-api.herokuapp.com/api/users/login", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === true) {
          window.location.href = "/profileListing";
        } else {
          this.setState({ errorMsg: "please enter valid credentials" });
        }
      });
  };

  errorComponent  () {
    if (this.state.errorMsg !== '') {
      return (<div>
      <p className="text-danger">{this.state.errorMsg}</p>
      </div>)
    }
  }
  
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <h3 align="center">Login here!!!</h3>
            <div align="center"> {this.errorComponent()} </div>
            <form onSubmit={this.handleSubmit} align="center">
              <div className="form-group">
                <label> Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="enter your user name"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label> Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
          </div>
      </React.Fragment>
    );
  }
}

export default Login;
