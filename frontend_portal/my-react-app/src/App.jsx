import "./assets/css/style.css"

import Main from "./component/Main"
import Register from "./component/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Login from "./component/Login"
import AuthsProvider from "./component/auth/AuthsProvider"
import Dashboard from "./component/Dashboard"
import PrivateRoute from "./component/auth/Router/Privateroute"
import Publicroute from "./component/auth/Router/Publicroute"

function App() {
  return (
    <AuthsProvider>
  <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Publicroute><Register /></Publicroute>} />
          <Route path="/login" element={<Publicroute><Login /></Publicroute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
    </AuthsProvider>
  
  )
}

export default App