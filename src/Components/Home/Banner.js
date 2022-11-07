import React from "react";

const Banner = () => {
  return (
    <div className="mt-4 mb-4">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
                <img
                    src="https://i.ibb.co/M1YWZMr/cooking-at-home.gif"
                    className="w-full rounded-lg" alt=""
                />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">Welcoe to <br /> My Ranna Ghor !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
