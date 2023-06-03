import React from "react"
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"


import './styles/header.css'
import './styles/register.css'
import './styles/login.css'
import './styles/dashboard.css'
function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element={<Dashboard />}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/login" element={<Login />}/>
      </Routes>
    </Router>
    
  )
}

export default App
