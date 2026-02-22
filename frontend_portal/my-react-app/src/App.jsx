import "./assets/css/style.css"

import Main from "./component/Main"
import Register from "./component/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Login from "./component/Login"
import AuthsProvider from "./component/auth/AuthsProvider"
import Dashboard from "./component/Dashboard"

function App() {
  return (
    <AuthsProvider>
  <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
    </AuthsProvider>
  
  )
}

export default App