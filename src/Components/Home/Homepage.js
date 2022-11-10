import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Contact from './About';
import Newsletter from './Newsletter';
import Recipies from './Recipies';


const Homepage = () => {
    const foodServices = useLoaderData();
    // console.log(foodServices)
    
    return (
        <div>
            <div className='px-5 md:px-20'>
                <Helmet>
                    <title>Mimi Kitchen - Home</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                 </Helmet>
                <Banner/>
                <Recipies foodServices={foodServices} />
                <Contact/>
                <Newsletter/>


            </div>
        </div>
    );
};

export default Homepage;