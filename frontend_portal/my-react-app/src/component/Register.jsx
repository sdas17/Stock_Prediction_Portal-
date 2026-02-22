import React, { useState } from 'react'
import axios from "axios";

const Register = () => {
 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,seterror]=useState("")
  const [loading,setloading]=useState(false)
const [sucessmessage,setSucessmessage]=useState(false)
const handleSubmit = async (e) => {
  e.preventDefault();

  setloading(true);
  seterror("");

  const formsubmit = {
    username,
    email,
    password
  };

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/accounts/",
      formsubmit,
      
    );
    console.log(response,'29');
      setSucessmessage(true);


    

  } catch (err) {
    console.log(err.response?.data.username);
    seterror(err.response?.data.username);
      setSucessmessage(false);

  } finally {
    setloading(false);
  }
};
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

              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-white">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                   value={email}
                  onChange={(e)=>setEmail(e.target.value)}

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
               {
                error &&(
                  <div  className="alert alert-danger" >
                     {error}
                  </div>
                )
              }
              {sucessmessage && (
  <div className="alert alert-success">
    Registration Successful ✅
  </div>
)}

              {/* Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary"   disabled={loading}
>
                      {loading ? "Registering..." : "Register"}

                </button>
              </div>

            </form>
           </div>
        </div>
        </div>
  )
}

export default Register