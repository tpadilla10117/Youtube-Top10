import React, { useState, useEffect } from 'react';
import { youtubeData } from '../../seed';


    function MusicCards() {
        const [ topSongs, setTopSongs ] = useState( () => {
            const savedYoutubeDataInLocalStorage = localStorage.getItem('youtubeSongs-Count');
            const initialValue = JSON.parse(savedYoutubeDataInLocalStorage);

            return initialValue || 'Nothing in Local Storage'
        });

        /* console.log('Result of topSongs'); */

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
        console.log('My hashMap: ', hashMap);
        const hashMapConvertedToJson = JSON.stringify(hashMap)
        localStorage.setItem('youtubeSongs-Count', hashMapConvertedToJson);
        return hashMap;
    };

    findSongCountArray(youtubeData) /* TODO: I get the correct data */
    console.log('Result of topSongs', topSongs);


    function pivot (arr, start=0, end=arr.length-1) {
        let pivot = arr[start][1];
        let swapIdx = start; //keeps track of how many numbers are less than the pivot, and allows us to swap at the correct index
        //a helper for swaping elements:
        function swap(array, i, j) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        };
    
        for (let i = start + 1; i < arr.length; i++) {
          if(pivot > arr[i][1]) {
            swapIdx++;
            swap(arr, swapIdx, i);
          }
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    
      };

      function quicksort(arr, left = 0, right = arr.length - 1) {
        //Base Case: once the subarrays narrow down to one element:
          if(left < right) {
        
            let pivotIndex = pivot(arr, left, right); //yield 3 with current array
        
            //left side:
            quicksort(arr, left, pivotIndex - 1)
        
            //right side:
            quicksort(arr, pivotIndex + 1, right);
          };
        
          /* console.log('How to get n elements: ', arr.slice(-3) ) */
        /*Returns TOP 3:  */
          return arr.slice(-10);
          /* return arr.slice(-3)[0][0]; */ /*Get's the title of the first indexed song  */
        };
        
        /* console.log(quicksort(findSongCountArray(youtubeData) ) ); */


        useEffect( () => {
            /* const savedYoutubeDataInLocalStorage = localStorage.getItem('youtubeSongs-Count');
            const parsedSavedYoutubeDataInLocalStorage = JSON.parse(savedYoutubeDataInLocalStorage); */
            
            if(topSongs === 'Nothing in Local Storage') {
                console.log('Nothing from the useEffect...')
                return
            } else {
                console.log('My new Top Songs after useEffect!', topSongs);
                console.log( 'Running quicksort on Top Songs: ', quicksort(topSongs) ); 
                /* TODO: Quicksort is bringing me back the last 10 songs with incorrect totals */
                
            }
    
        },[topSongs]);

        


    return (
        <section>
            MusicCards

        </section>
    )
    }

export default MusicCards;