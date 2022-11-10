import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet-async";

const AllFoodService = () => {
  const [allRecipes, setAllRecipies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/foodservices`)
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
    <div className="w-full bg-slate-300 p-12">
      <Helmet>
        <title>Mimi Kitchen - AlL Food Service</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
            My All Recipes
          </p>
          <p className="text-2xl font-light text-gray-700">
            You will also make this Recipe at your . I have added the material
            and cooking instruction for you. so that ,you can follw this
            instruction and make the recipies
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto"
          >
            <PhotoProvider>
              <PhotoView src={recipe.photoURL}>
                <img
                  src={recipe.photoURL}
                  alt="food-recipies"
                  className="max-h-40 w-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>

            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-2xl">{recipe.foodName}</p>

              <p className="text-gray-800 dark:text-white text-1xl mt-5 mb-2">
                {recipe.description.slice(0, 100) + "..."}
              </p>

              <p className="text-gray-800 dark:text-white mt-5 mb-2">
                Price: <span className="text-orange-500">{recipe.price}Tk</span>
              </p>

              <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                <Link to={`/recipe/description/${recipe._id}`}>
                  <button className="btn btn-primary btn-xs">Read More</button>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoodService;
