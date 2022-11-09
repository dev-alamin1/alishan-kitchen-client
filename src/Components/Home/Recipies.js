import React from "react";
import RecipiesCard from "./RecipiesCard";

const Recipies = ({foodServices}) => {

  

  return (

    
    <div className="recipes-container p-5 mt-20 mb-10 md:mt-10 bg-slate-200 px-10 rounded-lg">

       <h2 className="text-center text-4xl mb-2">My Special Recipies</h2>
       <p className="text-center">Lot of spychy recipe here </p>

      <div className="grid md:grid-cols-3 gap-10 mt-5 mb-5">
        {
          foodServices.map(food=><RecipiesCard key={food._id} food={food}/>)
        }
        
       

      </div>
    </div>
  );
};

export default Recipies;
