import React from 'react';
import './Home.scss';
import {
    HeroCarousel,
    Navbar,
    MusicCards,
    InfoSection
} from '../../components/utils.js';
import Vinyl from '../../assets/vinyl.jpg';
import { heroCarouselData } from '../../seed';

const HomePage = () => {

    return (
        <main id="homepage-parent-container">
            <Navbar />
            <HeroCarousel imgData={heroCarouselData} />
            
            <InfoSection 
                ptext={'We all enjoy listening to music '}
                ptext2={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
                ptext3={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                headingtxt={'2022 So Far...'}
                infoSectionClassName={'infoSection-parent-container'}
            /* TODO: need to update */
                infoSectionImg={Vinyl}
                alt={'Somne sample text'}
            />
            
        {/*TODO: MusicCards Component */}
            <MusicCards />
           
        
        </main>
    );
};

export default HomePage;