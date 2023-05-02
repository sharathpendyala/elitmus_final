import './App.css';
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import Question2 from './components/Questions/Question2';
import Question3 from './components/Questions/Question3';
import Question4 from './components/Questions/Question4';
import Question5 from './components/Questions/Question5';
import Score from './components/Score';
import Instructions from './components/Instructions';
function App() {
 return(
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Instructions" element={<Instructions/>}/>
        <Route path='/Question2' element={<Question2/>}/>
        <Route path="/Question3" element={<Question3/>}/>
        <Route path="/Question4" element={<Question4/>}/>
        <Route path="/Question5" element={<Question5/>}/>
        <Route path="/Score" element={<Score/>}/>
        </Routes>
       </Router>
    </div>
 )
}

export default App;
