
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/IniciarSesion";
import Signup from "./components/Registro";
import Home from "./components/Home";
import Error404 from "./components/error";
import Header from "./components/Header"

import axios from "axios";

axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
const token = localStorage.getItem('toke');
config.headers.Authorization=token ? `Bearer ${token}`:'';
return config;


})

const Acceso=({children}) =>{
if(localStorage.getItem('toke')==null){

return <Navigate to ='/login'/>

}
return children;


}



function App() {
  return (


    <BrowserRouter> 
    <Header/>
      <Routes>
        <Route exact path="/"  element={<Acceso><Home/></Acceso>}/> 
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route  path="*"         element={
        <main style={{ padding: "1rem" }}>
           <Navigate to ='/error'/>
        </main>
      }
    />
        <Route  path="/error" element={<Error404/>} />

      </Routes>
  </BrowserRouter>
  );
}
 
export default App;