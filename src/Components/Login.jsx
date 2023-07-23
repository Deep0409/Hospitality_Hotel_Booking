import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputRightElement,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Login.css";
import video1 from "../assets/video4.mp4";
import { Authcontext } from "../context/Authcontext";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [data, setData] = useState([]);
  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  
  const { auth, setAuth, log, setLog } = useContext(Authcontext);
  const handelSubmit = (e) => {
    e.preventDefault();

    if (auth.email === state.email && auth.password === state.password) {
      alert("Login successfully");
      setLog(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Please check your email or Password");
    }
  };
  console.log(auth);
  return (
    <div className="mainLogin">
      <div className="overlayLogin"></div>
      <video className="videoLogin" src={video1} autoPlay muted loop />
      <div className="containerLogin">
        <form className="formLogin" onSubmit={handelSubmit}>
          <Heading as="h4" size="lg">
            Login
          </Heading>
          &nbsp;&nbsp;
          <FormControl>
            <FormLabel> Email Address</FormLabel>
            <Input
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </FormControl>
          &nbsp;
          <FormLabel>Password</FormLabel>
          <FormControl isRequired>
            <InputGroup size="md">
              <Input
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="4+characters"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <input type="submit" value={"Login"} className="signbtn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
