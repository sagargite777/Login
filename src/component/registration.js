import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import axios from "axios";


const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [emailaddress, setEmailaddress] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const EmailInputChange = (event) => {
    setEmailaddress(event.target.value);
  };
  const LastNameInputChange = (event) => {
    setLastname(event.target.value);
  };
  const FirstNameInputChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleTermsChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: firstname,
      last_name: lastname,
      email: emailaddress,
      password:password
    };
    console.log(data)
    axios
      .post("https://reqres.in/api/register", data)
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
    if (passwordsMatch && acceptedTerms) {
      // submit the form
      console.log("Form submitted successfully!");
    } else {
      // display an error message
      console.log("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="card">
      <div className="d-flex p-5">
        <div className="d-flex col-lg-5 justify-content-center mt-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 for_center">
           
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="d-flex col-lg-7 for_login">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="border mt-5" style={{ padding: "24px 24px" }}>
              <form onSubmit={handleSubmit}>
                <label className="col-md-12 log_wel_come">Welcome !</label>
                <label className="col-md-12 login_label">
                  Register
                </label>
                <div className="d-flex mt-3">
                  <input
                    required
                    className="form-control"
                    type="text"
                    placeholder="Enter First Name &#42;"
                    value={firstname}
                    onChange={FirstNameInputChange}
                  />
                  <input
                    required
                    className="form-control"
                    style={{ marginLeft: "16px" }}
                    type="text"
                    placeholder="Enter Last Name &#42;"
                    value={lastname}
                    onChange={LastNameInputChange}
                  />
                </div>
                <div className=" mt-3">
                  <input
                    required
                    className="form-control"
                    type="email"
                    placeholder="Enter Email id &#42;"
                    value={emailaddress}
                    onChange={EmailInputChange}
                  />
                </div>
                <div className="mt-3">
                  <input
                    required
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mt-3">
                <input
                    required
                    className="form-control"
                    type="password"
                    placeholder="Re - Enter Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                {!passwordsMatch && (
                  <p style={{ color: "red" }}>Passwords do not match.</p>
                )}

                <div className="de-flex mt-3">
                  <input
                    required
                    type="checkbox"
                    style={{ height: "16px", width: "16px" }}
                    value={confirmPassword}
                    onChange={handleTermsChange}
                  />
                  <label className="terms_conditions">
                    I accept Terms and Conditions
                  </label>
                </div>
                <div className="d-grid mt-3">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
                <div className="mt-3 text-center">
                  <label>
                    Allready registered ?
                    <Link to="/login">
                      <span style={{ color: "#3283F6", paddingLeft: "5px" }}>
                        Sign Up
                      </span>
                    </Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;