import React from 'react'
import { FaUnlockAlt, FaUserAlt, FaUserCircle } from "react-icons/fa";

function Login() {
  return (
      <section className='login' id='login'>
        <div>
        <div className="flex justify-center items-center h-auto w-full bg-gray-400">
        <div className="w-96 h-450 bg-black p-5 flex flex-col justify-start opacity-50 rounded-md">
          <div className="mb-15">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
            <div className="image"><FaUserCircle className='text-white'/></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaUserAlt className='text-white'/></span>
                </div>
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaUnlockAlt className='text-white'/></span>
                </div>
                <input type="text" className="form-control" placeholder="Password" />
              </div>
              <button type="button" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">LOGIN</button>
              <div className="message">
                <div><input type="checkbox" /> Remember ME</div>
                <div><a href="#">Forgot your password</a></div>
              </div>
            </form>
            <div className="">
              <p className='text-gray-600'>Or</p>
              <a href="Register.jsx" className='btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center'>Create Account</a>
            </div>
          </div>
        </div>
      </div>
        </div>

      </section>
  )
}

export default Login