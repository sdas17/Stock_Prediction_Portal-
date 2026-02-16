import "./assets/css/style.css"

import Main from "./component/Main"
import Register from "./component/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
   
    
    </>
  )
}

export default App
