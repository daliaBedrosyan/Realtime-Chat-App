import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import './index.css';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter >
    </div>
  );
}

export default App;
