import React, { useEffect, useState } from "react";
import RecipiesCard from "../Home/RecipiesCard";

const AllFoodService = () => {
  const [allRecipes, setAllRecipies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://alishan-kitchen.vercel.app/foodservices`)
      .then((res) => res.json())
      .then((data) => {
        setAllRecipies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <section className="py-6 sm:py-12  text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-red-400">Special Recipies</h2>
          <p className="font-serif text-md text-gray-800">
            Whether its a special occasion, or you're just feeling fancy, here
            are some extraordinary dinner recipes that are guaranteed to impress
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          {allRecipes.map((food) => (
            <RecipiesCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFoodService;
