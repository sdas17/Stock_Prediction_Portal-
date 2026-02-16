import "./assets/css/style.css"

import Main from "./component/Main"
import Register from "./component/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Login from "./component/Login"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App