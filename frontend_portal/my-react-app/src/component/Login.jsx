import React, {useContext, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from './auth/AuthsProvider';

const Login = () => {
      const router =useNavigate()
const { islogged, setIslogges } = useContext(AuthContext);
console.log(islogged,setIslogges,'9');

 const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, seterror] = useState("");
const [successMessage, setSucessmessage] = useState(false);
const [loading, setloading] = useState(false);
   const handleSubmit = async (e)=>{
    e.preventDefault();
    const handleData={
     username: username,
  password: password
    }
      try {
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/token/",
      handleData,
      
    );
    localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
    router("/")   
      setIslogges(true)

    

  } catch (err) {
    console.log(err.response?.data.username);
    seterror(err.response?.data.username);
      setSucessmessage(false);

  } finally {
    setloading(false);
  }
    
 
     
   }
 
  return (
    <div className='container'>
        <div className='row justify-content-center'>
           <div className='col-md-6 bg-light-dark p-5'>
            <h3 className='text-light text-center'>Create an Account</h3>
            <form  onSubmit={handleSubmit}>

             
              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-white">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />

              </div>

            

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-white">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}

                />
              </div>

              {/* Button */}
              <div className="d-grid">
             <button
  type="submit"
  className="btn btn-primary"
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>
              </div>

            </form>
           </div>
        </div>
        </div>
  )
}

export default Login