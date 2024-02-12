import React from 'react'

function Registration() {
  return (
    <div>
      return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green to-white">
        <div className="w-80 h-96 bg-black p-8 flex flex-col justify-start opacity-50 rounded-lg">
          <div className="mb-6">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
            <div className="image"></div>
          </div>
          <div className="mb-6">
            <form>
              <div className="mb-3">
                <div className="flex items-center">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                  <input type="text" className="form-control" placeholder="Password" />
                </div>
              </div>
              <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
              <div className="flex justify-between">
                <div><input type="checkbox" /> Remember ME</div>
                <div><a href="#">Forgot your password</a></div>
              </div>
            </form>
          </div>
          <div className="flex justify-around">
            <a href="#"><i className="fab fa-facebook text-white text-xl hover:text-red-500"></i></a>
            <a href="#"><i className="fab fa-google text-white text-xl hover:text-red-500"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Registration