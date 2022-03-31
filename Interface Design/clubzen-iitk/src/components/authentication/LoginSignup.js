import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { LoginAuth } from "../../services/auth.service";
import { isEmail } from "validator";
import { RegisterAuth } from "../../services/auth.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';

import './LoginSignup.css'

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const LoginRegister = (props) => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeFullname = (e) => {
        const fullname = e.target.value;
        setFullname(fullname);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            RegisterAuth(username, fullname, email, password).then(
                (response) => {
                    setMessage("User registered successfully");
                    setSuccessful(true);
                    window.location.reload(false);
                    navigate('/login')
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if(resMessage === "Network Error")
                        setMessage(resMessage);
                    else
                        setMessage("Kindly recheck your credentials");
                    setSuccessful(false);
                }
            );
        }
    };
    const handleLogin = (e) => {

        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            LoginAuth(username, password).then(
                (response) => {
                    // props.history.push("/profile");
                    navigate("/profile")
                    setMessage(response.data.message)
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage("Wrong Credentials");
                }
            );
        } else {
            setLoading(false);
        }
    };
    return (
        <div className="middle-show">
            <div className="container-log">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src="Images/login.jpg" alt="" />
                        <div className="text">
                            <span className="text-1">Every new friend is a <br /> new adventure</span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">
                        <img className="backImg" src="Images/signup.jpg" alt="" />
                        <div className="text">
                            <span className="text-1">Complete miles of journey <br /> with one step</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <Form onSubmit={handleLogin} ref={form}>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <label htmlFor="username"><FontAwesomeIcon icon={faUser} /></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            name="username"
                                            value={username}
                                            onChange={onChangeUsername}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="password"><FontAwesomeIcon icon={faLock} /></label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            name="password"
                                            value={password}
                                            onChange={onChangePassword}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Login" />
                                    </div>
                                    {message && (
                                        <div className="input-box">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                                </div>
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            </Form>
                        </div>
                        <div className="signup-form">
                            <div className="title">Signup</div>
                            <Form onSubmit={handleRegister} ref={form}>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <label htmlFor="username"><FontAwesomeIcon icon={faUser} /></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your username"
                                            name="username"
                                            value={username}
                                            onChange={onChangeUsername}
                                            validations={[required, vusername]}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="fullname"><FontAwesomeIcon icon={faPenClip} /></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            name="fullname"
                                            value={fullname}
                                            onChange={onChangeFullname}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={email}
                                            onChange={onChangeEmail}
                                            validations={[required, validEmail]}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="password"><FontAwesomeIcon icon={faLock} /></label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            name="password"
                                            value={password}
                                            onChange={onChangePassword}
                                            validations={[required, vpassword]}
                                        />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    {message && (
                                        <div className="input-box">
                                            <div
                                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                                role="alert"
                                            >
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                                </div>
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;