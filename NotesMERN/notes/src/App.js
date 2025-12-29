import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Weather from "./Pages/Weather";
import ProtectedRoute from "./Auth/ProtectedRoute";
const logout = () => {
    localStorage.removeItem("isLoggedIn");
  };
  
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes>
          <Route path='/' element={<Layout/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes> */}
        <Routes>
         <Route path='/' element={<Layout logout={logout} />}>
            <Route path="Home" element={""} />
            <Route path="notes" element={<Notes />} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute> } />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="weather" element={<Weather />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
