import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div class="auth-hero">
      <div>
        <div className="card-body md:w-[450px] mx-auto shadow-lg mt-10 ">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Image Url</span>
              </label>
              <input
                type="text"
                name="imgUrl"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <span>
                  <small>
                   Already have an account ?{" "}
                    <Link to={"/register"} className="hover:bg-red-200">
                      Login
                    </Link>
                  </small>
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>

          <div className="flex gap-1">
            <div className="w-1/2 bg-orange-400 text-center rounded-md text-white hover:bg-slate-500">
              <button className="py-2 flex items-center">
                {" "}
                <p className="ml-2 md:ml-4">
                  Sign UP with{" "}
                  <span className="inline-block">Google</span>
                </p>{" "}
              </button>
            </div>

            <div className="w-1/2  bg-orange-400 text-center rounded-md text-white hover:bg-slate-500">
              <button className="py-2 flex items-center">
                {" "}
                <p className="ml-2 md:ml-4">
                Sign UP with{" "}
                  <span className="inline-block">Github</span>
                </p>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
