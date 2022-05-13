import React from 'react';
import './Home.scss';
import {
    HeroCarousel,
    Navbar,
    MusicCards,
    InfoSection
} from '../../components/utils.js';
import { heroCarouselData } from '../../seed';

const HomePage = () => {

    return (
        <main id="homepage-parent-container">
            <Navbar />
            <HeroCarousel imgData={heroCarouselData} />
            
            <InfoSection 
                ptext={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '}
                ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                headingtxt={'Welcome to...'}
                infoSectionClassName={'infoSection-parent-container'}
            /* TODO: need to update */
                /* infoSectionImg={Amanda} */
                /* alt={'Somne sample text'} */
            />
            
        {/*TODO: MusicCards Component */}
            <MusicCards />
           
        
        </main>
    );
};

export default HomePage;