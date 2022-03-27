
import './App.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Login from "./components/IniciarSesion";
import Signup from "./components/Registro";
import Home from "./components/Home";
import axios from "axios";

axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/Login" element={<Login/>} />
        <Route  path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  </Router>
  );
}
 
export default App;