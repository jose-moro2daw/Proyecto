import React from "react";
import {  Grid,  Paper,  Avatar,  TextField,  Button,  Typography,  Link as Nv} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  const paperStyle = {padding: 20,height: "70vh", width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#3370bd" };
  const btnstyle = { margin: "8px 0" };

  const [msg, setMsg] = useState("");

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState({email: "",password: "",errorList: []});

function verContraseña(e){

if(document.getElementById("pass").checked){
  document.getElementById("contra").type="text"
}else{
  document.getElementById("contra").type="password"
}
}
  let navigate = useNavigate();
  const { email, password } = user;
  const onInputChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function signIn(e) {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("api/reactlogin", user).then((res) => {
        if (res.data.validation_errors != undefined) {
          if (res.data.validation_errors.email == "The email field is required.") {
            res.data.validation_errors.email = "Email requerido";
          } else if (
            res.data.validation_errors.email =="The email must be a valid email address.") {
            res.data.validation_errors.email = "Debe ser un email";
          }

          if (res.data.validation_errors.password =="The password field is required.") {
            res.data.validation_errors.password = "password requerido";
          } else if (res.data.validation_errors.password =="The password must be at least 4 characters.") {
            res.data.validation_errors.password ="Debe ser de mas de 4 caracteres";
          }
        }

        if (res.data.status === 200) {
          setUser({ ...user, errorList:[]});
           localStorage.setItem('toke',res.data.token)
           localStorage.setItem('username',res.data.name)
           Swal.fire({
            icon: 'success',
            title: res.data.message,
          })
          navigate('/');


        } else if (res.data.status === 401) {
          axios.post("api/usuario", user).then((res) => {
            if (res.data.status === 402) {
              if (res.data.password == "Contraseña incorrecto") {

                setUser({ ...user, errorList:{ password: res.data.password } });

              }
              if (res.data.password == "") {
                setUser({ ...user, errorList:{ email: res.data.email } });

              }
            }
          });
        } else {
          setUser({ ...user, errorList: res.data.validation_errors });
          console.log(user.errorList);
        }
        console.log(res);
      });
 
    });
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Iniciar Sesion</h2>
          <h4 style={{ color: "green" }}>{msg}</h4>
        </Grid>
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

       <p>
        <TextField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          placeholder="Enter password"
          type="password"
          id="contra"
          fullWidth
          required
        />
       <span className="badge badge-danger">{user.errorList.password}</span>
        <p>Mostrar contraseña     <input type="checkbox" id="pass"  onClick={(e)=>verContraseña(e)}/></p> </p>

        <Button
          type="submit"
          onClick={(e) => signIn(e)}
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
         Iniciar sesion 
        </Button>

        <Typography>
          {" "}
          Don't Have Account ?
          <NavLink to="../Signup">
            <span style={{ marginLeft: "4px" }}>Registrarte</span>
          </NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
