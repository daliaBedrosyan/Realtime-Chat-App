import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import './index.css';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
