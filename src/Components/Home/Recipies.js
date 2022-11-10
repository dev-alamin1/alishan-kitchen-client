import React from "react";
import { Link } from "react-router-dom";
import RecipiesCard from "./RecipiesCard";

const Recipies = ({foodServices}) => {

  

  return (

    
    <div className="recipes-container p-5 mt-20 mb-10 md:mt-10  px-10 rounded-lg">

       <h3 className="text-2xl text-center font-bold tracking-tight sm:text-3xl ">Special Recipies Tips</h3>
       

      <div className="grid md:grid-cols-3 gap-10 mt-5 mb-5">
        {
          foodServices.map(food=><RecipiesCard key={food._id} food={food}/>)
        }
        
        
      </div>

       <div className="w-32 mx-auto">
           <Link className="text-center" to={'/showallfood'}><button className="bg-blue-400 text-white py-1 px-2 rounded">Show All</button></Link>
       </div>

    </div>
  );
};

export default Recipies;
