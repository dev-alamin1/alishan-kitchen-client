import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Contact from './About';
import Newsletter from './Newsletter';
import Recipies from './Recipies';


const Homepage = () => {
    const allRecipes = useLoaderData();
    // console.log(foodServices)
    
    return (
        <div>
            <div className='px-5 md:px-20'>
                <Helmet>
                    <title>Alishan Kitchen - Home </title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                 </Helmet>
                <Banner/>
                <Recipies foodServices={allRecipes} />
                <Contact/>
                <Newsletter/>


            </div>
        </div>
    );
};

export default Homepage;