
import './App.css';
import { BrowserRouter as Router, Route,Routes,withRouter} from "react-router-dom";
import Login from "./IniciarSesion";
import Signup from "./Registro";
import Home from "./Home";
 
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  </Router>
  );
}
 
export default App;