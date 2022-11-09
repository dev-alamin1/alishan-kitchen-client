import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import Recipies from './Recipies';

const Homepage = () => {
    const foodServices = useLoaderData();
    // console.log(foodServices)
    
    return (
        <div>
            <div className='px-5 md:px-20'>
                <Banner/>
                <Recipies foodServices={foodServices} />
                <Contact/>
            </div>
        </div>
    );
};

export default Homepage;