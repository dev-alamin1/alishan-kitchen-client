import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const RecipiesCard = ({food}) => {

    const {_id,foodName,photoURL,description,price} = food;


    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
                <PhotoView src={photoURL}>
                    <img src={photoURL} alt="food-recipies" className="w-full h-72" style={{ objectFit: 'cover' }}  />
                </PhotoView>
            </PhotoProvider>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>{description.slice(0,100)+'...'}</p>
          <p className="text-gray-800 dark:text-white mt-5 mb-2">
               Price: <span className="text-orange-500">{price}Tk</span>
             </p>
          <div className="card-actions justify-end">
             <Link to={`/recipe/description/${_id}`}><button className="btn btn-primary btn-xs">Read More</button></Link>
          </div>
        </div>
      </div>
    );
};

export default RecipiesCard;