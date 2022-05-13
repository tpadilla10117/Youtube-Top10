import React from 'react';
import './Home.scss';
import {
    HeroCarousel,
    Navbar
} from '../../components/utils.js';
import { heroCarouselData } from '../../seed';

const HomePage = () => {

    return (
        <main id="homepage-parent-container">
            <Navbar />
            <HeroCarousel imgData={heroCarouselData} />
            
        {/*TODO: Youtube Card Component */}
           
        
        </main>
    );
};

export default HomePage;