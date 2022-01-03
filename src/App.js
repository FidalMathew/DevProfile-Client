import './App.css';
import User from './Components/User'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Edit from './Components/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/edit" element={<Edit />}></Route>
          <Route exact path="/:uname" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
