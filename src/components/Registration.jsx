import React from 'react';
import { FaEnvelopeOpen, FaGoogle, FaPhoneAlt, FaUnlockAlt, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../config/firebase-config"

function Registration() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

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
              <h4 className="text-primary text-center text-white text-2xl font-bold p-2">Admin Sign Up Page</h4>
              <div className=""><FaUserCircle className='text-white w-full h-40 p-2'/></div>
            </div>
            <div className="body-form">
              <form>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaUserAlt className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Full Name" />
                </div>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaEnvelopeOpen className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Email" />
                </div>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaUnlockAlt className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Password" />
                </div>
                <div className="input-group mb-3 flex">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FaPhoneAlt className='text-red-500 h-12 ml-2 absolute'/></span>
                  </div>
                  <input type="text" className="form-control h-10 w-full pl-12" placeholder="Phone No." />
                </div>
                <button type="button" className="btn btn-primary w-full inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center">CREATE ACCOUNT</button>
                <p className='text-white text-center mb-8'>OR</p>

                <div className="flex justify-center items-center">
                <button onClick={signInWithGoogle} className='btn btn-primary inline-block w-full uppercase text-center mt-2 px-4 py-2 mb-8 bg-transparent border-2 border-red-500 text-white self-center flex justify-center items-center'>Sign up with <FaGoogle className='ml-4'/></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
