import './App.css'; import Home from './Pages/Home/Home';
import Profile from './Pages/Home/Profile/Profile';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
  <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile/:id" element={<Profile />}></Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
