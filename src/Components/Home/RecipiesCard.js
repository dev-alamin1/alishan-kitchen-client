import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const RecipiesCard = ({ food }) => {
  const { _id, foodName, photoURL, description, price } = food;

  return (
    <article className="flex flex-col bg-gray-900 hover:shadow-lg">
      <PhotoProvider>
        <PhotoView src={photoURL}>
          <img
            src={photoURL}
            alt="food-recipies"
            className="w-full h-72"
            style={{ objectFit: "cover" }}
          />
        </PhotoView>
      </PhotoProvider>

      <div className="flex flex-col flex-1 p-6 ">
        <p aria-label="Te nulla oportere reprimique his dolorum">{foodName}</p>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {description.slice(0, 100) + "..."}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span className="text-yellow-400 font-bold font-md">Price : {price}Tk</span>
          <span>
            <Link to={`/recipe/description/${_id}`}>
              <button className="btn btn-outline btn-warning btn-sm">
                Read more
              </button>
            </Link>
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecipiesCard;
