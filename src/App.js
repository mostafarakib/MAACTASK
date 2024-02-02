import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import TopNavBar from "./components/LandingPage/TopNavBar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
