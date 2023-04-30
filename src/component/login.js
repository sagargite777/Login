import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';


const Login = () => {
  const navigate= useNavigate();
  const [useremail, userEmailupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const ProceedLogin = (e) => {
    e.preventDefault();
    const data = {
      email: useremail,
      password: password,
    };

    if (validate()) {
      console.log("proceed");
      //let token = "";
      axios
        .post("https://reqres.in/api/login", data)
        .then((resp) => {
          console.log(resp);
          localStorage.setItem('token',resp.data.token)
          navigate('/')
        })
        .catch((error) => {
          console.log("Login Failed due to :" + error.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (useremail === "" || useremail === null) {
    }
    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };

  return (
    <div className="card">
      <div className="d-flex p-5">
        <div className="col-md-5"></div>
        <div className="d-flex col-md-7 justify-content-center">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="border mt-5" style={{ padding: "24px 32px" }}>
              <form onSubmit={ProceedLogin} className="container">
                <label className="col-md-12 log_wel_come">Welcome !</label>
                <label className="col-md-12 login_label">
                  Sign In
                </label>
                <div className="form-group mt-3">
                  <label>
                    Email <span style={{ color: "red" }}>&#42;</span>
                  </label>
                  
                  <input
                    onChange={(e) => userEmailupdate(e.target.value)}
                    value={useremail}
                    className="form-control"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>
                    Password <span style={{ color: "red" }}>&#42;</span>
                  </label>
                  <input
                    onChange={(e) => passwordupdate(e.target.value)}
                    value={password}
                    className="form-control"
                    type="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="de-flex mt-3">
                  <input
                    type="checkbox"
                    style={{ height: "16px", width: "16px" }}
                  />
                  <span style={{ paddingLeft: "10px" }}>Remember me</span>
                </div>
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <label>
                    Not registered yet ?{" "}
                    <Link to="/resistration">
                      <span style={{ color: "#3283F6" }}>Registered now </span>
                    </Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
