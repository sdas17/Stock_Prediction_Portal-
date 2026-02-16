import React from 'react'

const Register = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
           <div className='col-md-6 bg-light-dark p-5'>
            <h3 className='text-light text-center'>Create an Account</h3>
            <form>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label text-white">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label text-white">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label text-white">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              {/* Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>

            </form>
           </div>
        </div>
        </div>
  )
}

export default Register