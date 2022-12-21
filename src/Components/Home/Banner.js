import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-10 md:mt-24 mb-10">
      <div className="hero  bg-base-50 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/M1YWZMr/cooking-at-home.gif"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-center md:text-left" style={{fontFamily:'Lobster',letterSpacing :'3px'}}>
              WELCOME TO <br /> 
              <span className="text-blue-400 mt-4" style={{fontFamily:'Lobster',letterSpacing :'3px'}}>Alishan KITCHEN !</span>
            </h1>
            <p className="py-6">
              Alishan Kitchen is a kind of cloud kitchen. Here, cooking tips and
              instructions are shared for various types of food recipes. By
              looking at the tips and instructions, you can make these recipes
              at home. Through this web site you can order different types of
              dishes.
            </p>
            <Link to={"/showallfood"}>
              <button className="btn btn-primary">Order now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
