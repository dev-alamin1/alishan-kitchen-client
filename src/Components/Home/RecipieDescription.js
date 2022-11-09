import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Foodreview from "../FoodService/Foodreview";

const RecipieDescription = () => {
  const recipe = useLoaderData();
  const {
    photoURL,
    _id,
    foodName,
    description,
    materials,
    instruction,
    price,
  } = recipe;

  const ingredients = materials.split(",");
  const cookingInstructions = instruction.split(".");
  return (
    <div>
      <div className="md:w-2/3 px-10 md:mx-auto py-10 ">
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src={photoURL}>
                <img
                  src={photoURL}
                  alt="food-recipies"
                  className="w-full h-96"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{foodName}</h2>
            <p>{description}</p>

            <div className="grid md:grid-cols-2 justify-center gap-2 ">
              <div>
                <h2 className="text-3xl text-amber-500">Ingredients </h2>

                <div className="w-full">
                  <div className="mt-5 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-2 divide-y divide-gray-100"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {ingredients.map((ingredient, index) => (
                        <li className="text-2xl ml-2 mr-0" key={index}>
                          {ingredient}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-amber-500">
                  Instruction For Cooking{" "}
                </h2>

                <div className="w-full">
                  <div className="mt-5 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-2 divide-y divide-gray-100"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {cookingInstructions.map((ins, index) => (
                        <li className="text-2xl ml-2 mr-0 mb-2" key={index}>
                          {ins}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* review  */}

        <div>

            <Foodreview></Foodreview>

          
        </div>
        


        {/* write comment */}

        <div>
          <div className="flex flex-col  p-4 shadow-sm rounded-xl  ">
            <div className="flex flex-col items-center w-full">
              
              <form className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder="Message..."
                  className="p-2 rounded-md resize-none border bg-blue-200"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-2 font-semibold rounded-md bg-violet-400"
                >
                  Leave feedback
                </button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipieDescription;
