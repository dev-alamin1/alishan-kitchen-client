import React from "react";

const Addfood = () => {

  const submitHandler = (e)=>
  {
          e.preventDefault();
          const form = e.target;
          const foodName = form.foodName.value;
          const price = form.price.value;
          const photoURL = form.photoURL.value;
          const instruction = form.instruction.value;
          const materials = form.materials.value;
          const description = form.description.value;

          const foodService = {
            foodName,photoURL,instruction,price,materials,description
          }

        // send data to server
        fetch('http://localhost:5000/addFoodService',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(foodService)
        })
         .then(res=>res.json())
         .then(data=>console.log(data))

  }

  return (
    <div className="">
      <div className="card-body  w-3/4 mx-auto mb-10 bg-slate-300 rounded-md mt-10 hover:shadow-lg ">
        <h2 className="text-center text-2xl font-bold text-orange-600">Add Food Recipies</h2>
        <form onSubmit={submitHandler}>

          <div className="grid md:grid-cols-2 gap-2">

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


          </div>

         

          

          

          

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Description</span>
            </label>
            <div className='mt-4'>
                 <textarea className="textarea textarea-bordered w-full h-44" name='description' placeholder="Description"></textarea>
              </div>

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Food Materials</span>
            </label>
            <div className='mt-4'>
                 <textarea className="textarea textarea-bordered w-full h-44" name='materials' placeholder="Materials"></textarea>
              </div>

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Food Cooking Instruction</span>
            </label>
            <div className='mt-4'>
                 <textarea className="textarea textarea-bordered w-full h-44" name='instruction' placeholder="Instruction"></textarea>
              </div>

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered text-black"
              required
            />
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
