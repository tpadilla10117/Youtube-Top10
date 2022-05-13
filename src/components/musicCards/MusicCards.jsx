import React, { useState } from 'react';
import { youtubeData } from '../../seed';


    function MusicCards() {
        const [ topSongs, setTopSongs ] = useState();

        /* 1) This function creates a hashMap of the given dataset,*/
    /* It outputs an array of arrays */
    /* 
        e.g. [
                [ 'Watched Super Bass', 1 ],
                [ 'Watched Treasure', 1 ],
                [ 'Watched Motivation', 3 ],
            ]
     */

    function findSongCountArray(arr) {

        let hashMap = {};
    
        for(let songs of arr) {
        
            if(!hashMap[songs.title]) {
            hashMap[songs.title] = 1
            } else {
            hashMap[songs.title]++
            }
        
        }
        /* console.log('Object.entries:', Object.entries(hashMap) ) */
        hashMap = Object.entries(hashMap);
        setTopSongs(hashMap);
        console.log('My TopSongs: ', setTopSongs);
        /* return hashMap; */
    };

    /* findSongCountArray(youtubeData); */


    return (
        <section>
            MusicCards

        </section>
    )
    }

export default MusicCards;