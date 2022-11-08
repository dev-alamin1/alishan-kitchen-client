import React from "react";

const Addfood = () => {
  return (
    <div className="h-screen">
      <div className="card-body md:w-[450px] mx-auto bg-slate-300 rounded-md mt-10 hover:shadow-lg ">
        <h2 className="text-center text-2xl font-bold text-orange-600">Add Food Recipies</h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Food Name</span>
            </label>
            <input
              type="text"
              name="foodName"
              placeholder="food name"
              className="input input-bordered text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photo url"
              className="input input-bordered text-black"
              required
            />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text ">Description</span>
            </label>
            <div className='mt-4'>
                 <textarea className="textarea textarea-bordered w-full h-44" name='description' placeholder="Description"></textarea>
              </div>

          </div>



          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Food</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addfood;
