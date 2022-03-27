import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Swal from "sweetalert2";

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#3370bd" };
  const btnstyle = { margin: "8px 0" };

  /*  const[errors,setErrors] = useState({
     errorList:[]


    });*/

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    errorList: [],
  });
  const navigate = useNavigate();

  const { name, email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function signup(e) {
    e.persist();
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("api/register", user).then((res) => {
        if (res.data.status === 200) {
          console.log("hola");
          user.errorList = [];
          localStorage.setItem("toke", res.data.token);
          localStorage.setItem("username", res.data.name);

          Swal.fire({
            icon: "success",
            title: res.data.message,
          });
          navigate("/");
        } else {
          setUser({ ...user, errorList: res.data.validation_errors });
        }

        console.log(res);
      });
 
    });
  }

  return (
    <Grid>
      <Header />

      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          placeholder="Enter Name"
          type="text"
          fullWidth
          required
        />
        <span className="badge badge-danger">{user.errorList.name}</span>
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          placeholder="Enter Email"
          type="text"
          fullWidth
          required
        />
        <span className="badge badge-danger">{user.errorList.email}</span>

        <TextField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <span className="badge badge-danger">{user.errorList.password}</span>

        <Button
          type="submit"
          onClick={signup}
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Singup
        </Button>

        <Typography>
          Click Here for
          <NavLink to="/Login">
            <span style={{ marginLeft: "4px" }}>Login</span>
          </NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
