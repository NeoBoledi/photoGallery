import React from 'react';
import { FaGoogle, FaUnlockAlt, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app  from "../config/firebase-config"

function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signInWithGoogle=()=>{
   signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
   console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
  });
  }
  return (
    <section className='login' id='login'>
      <div>
        <div className="flex justify-center items-center h-auto w-full bg-gray-400 p-8">
          <div className="w-96 h-450 bg-black p-8 flex flex-col justify-start opacity-50 rounded-md">
            <div className="mb-15">
              <h4 className="text-primary text-center text-white text-2xl font-bold p-2">Admin Sign In Page</h4>
              <div className=""><FaUserCircle className='text-white w-full h-40 p-2'/></div>
            </div>
            <div className="body-form">
              <form>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaUserAlt className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Username" />
                </div>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaUnlockAlt className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Password" />
                </div>
                <div className="message flex justify-between">
                  <div className='text-white'><input type="checkbox"/> Remember ME</div>
                  <div><a href="#" className='text-blue-500'>Forgot your password</a></div>
                </div>
                <button type="button" className="btn btn-primary w-full inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">LOGIN</button>
              </form>
              <div className="">
                <p className='text-gray-600 text-center'>Or</p>
                <button onClick={signInWithGoogle} className='btn btn-primary inline-block w-full uppercase text-center mt-2 px-4 py-2 mb-8 bg-transparent border-2 border-red-500 text-white self-center flex justify-center items-center'>Sign in with <FaGoogle className='ml-4'/></button>
                <a href="/register" className='btn btn-primary inline-block w-full uppercase text-center mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center'>Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
