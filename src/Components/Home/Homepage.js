import React from 'react';
import Banner from './Banner';
import Recipies from './Recipies';

const Homepage = () => {
    return (
        <div>
            <div className='px-5 md:px-20'>
                <Banner/>
                <Recipies/>
            </div>
        </div>
    );
};

export default Homepage;