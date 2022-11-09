import React, { useEffect, useState } from 'react';

const Myreviewrow = ({review,index}) => {

    const [foodServiceInfo, setFoodServiceInfo] = useState([]);
    const {foodName,photoURL} = foodServiceInfo;

    // load food service info , when get reivew.recipeId.
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${review.recipePostId}`)
        .then(res=>res.json())
        .then(data=>setFoodServiceInfo(data))
    },[review])


    return (
          <tr className="text-gray-700" >
                <td className="border-b-2 p-4 dark:border-dark-5">{index+1}</td>
                
                <td className="border-b-2 p-4 dark:border-dark-5">{foodName}</td>

                <td className="border-b-2 p-4 dark:border-dark-5">
                    <img src={photoURL} alt="" className='w-20' />
                </td>

                <td className="border-b-2 p-4 dark:border-dark-5">{review.feedback}</td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                <button className="btn btn-outline btn-warning btn-sm">
                    Delete
                </button>
                </td>
          </tr>
    );
};

export default Myreviewrow;