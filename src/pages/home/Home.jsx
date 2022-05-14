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
                ptext={'You listened to 5691 songs this year, but there was clearly a pattern to your listening...'}
                ptext2={'While everyone was trying to figure out what was going on with crypto, the stock market, NFTs, and the rest of the world, you had 10 songs on repeat'} 
                ptext3={'There were 10 songs that lived in your head rent free during the year so far:'}
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