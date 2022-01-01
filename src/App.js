import './App.css';
import User from './Components/User'
import Home from './Components/Home'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/:uname" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
