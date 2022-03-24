
import './App.css';
import { BrowserRouter as Router, Route,Routes,withRouter} from "react-router-dom";
import Login from "./components/IniciarSesion";
import Signup from "./components/Registro";
import Home from "./components/Home";
 
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