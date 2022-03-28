
import './App.css';
import { BrowserRouter as Router, Navigate, Route,Routes} from "react-router-dom";
import Login from "./components/IniciarSesion";
import Signup from "./components/Registro";
import Home from "./components/Home";
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

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/"  element={localStorage.getItem('toke') ? <Navigate to={<Home/>}/>:<Login/>}  />
      
        <Route  path="/Login" element={localStorage.getItem('toke') ? <Navigate to={<Home/>}/>:<Login/>} />
        <Route  path="/registro" element={localStorage.getItem('toke') ? <Navigate to={<Home/>}/>:<Signup/>} />

      </Routes>
    </div>
  </Router>
  );
}
 
export default App;