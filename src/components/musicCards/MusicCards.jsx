import React, { useState, useEffect/* , useMemo */ } from 'react';
import YouTube from 'react-youtube';
import { youtubeData } from '../../seed';
import getYouTubeID from 'get-youtube-id';


    function MusicCards() {
        const [ topSongs, setTopSongs ] = useState( () => {
            const savedYoutubeDataInLocalStorage = localStorage.getItem('youtubeSongs-Count');
            const initialValue = JSON.parse(savedYoutubeDataInLocalStorage);

            return initialValue || 'Nothing in Local Storage'
        });

        const [ sortedTop10, setSortedTop10 ] = useState();
        const [ sortedTop10Object, setSortedTop10Object ] = useState();

        const opts = {
            height: '390',
            /* width: '640', */
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };

          const onPlayerReady = (event) => {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
          };


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
        
        hashMap = Object.entries(hashMap);
        const hashMapConvertedToJson = JSON.stringify(hashMap)
        localStorage.setItem('youtubeSongs-Count', hashMapConvertedToJson);
        return hashMap;
    };

    /* findSongCountArray(youtubeData); */

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

        /* const memoizedTop10 = useMemo( () => {
            return quicksort(topSongs);
        }, [topSongs]); */

/* 2) This function takes the output of findCountSongArray: */
        /* It outputs a sorted array with the songs with the most views/listens (top 10) resulting at the end */
        /* 
        e.g. [
                [ 'Watched Be Sweet', 18 ],
                [ 'Watched Paprika', 19 ],
                [ 'Watched Motion Sickness', 20 ],
            ]
        */
        function quicksort(arr, left = 0, right = arr.length - 1) {
            //Base Case: once the subarrays narrow down to one element:
            if(left < right) {
            
                let pivotIndex = pivot(arr, left, right); //yield 3 with current array
            
                //left side:
                quicksort(arr, left, pivotIndex - 1)
            
                //right side:
                quicksort(arr, pivotIndex + 1, right);
            };
            
            /*Returns TOP 3:  */
            return arr.slice(-10);
            
            };
        
/* 3) This function takes the sorted array and splices the result: */
            /* It outputs an array of objects, */
            /* The original object of each song in the given JSON file */

        function splicedOriginalData(arr) {

            let originalData = youtubeData;
            let newArray = [];
            let finalArray = [];
          
           for(let i = 0; i < arr.length; i++) {
                
          /*Finds first index of the top ten in the original data set:  */
              const indexesOfSongs = originalData.findIndex(object => {
                return object.title === arr[i][0]
              }) ;
             
              newArray.push(indexesOfSongs);
           };
          
            for(let j = 0; j < newArray.length; j++) {
    
                let theIndexOfTopTenSong = newArray[j];
            
                let theTopTenSongData = originalData[theIndexOfTopTenSong];
                finalArray.push(theTopTenSongData);
            
            };
              
            return finalArray;
          };

        /* const quickSortCallback = useMemo( () => {
            console.log( "From the callback: ", quicksort(topSongs) );
            return quicksort(topSongs);

            }, [topSongs, quicksort]
        ); */



        useEffect( () => {
           
            if(topSongs === 'Nothing in Local Storage') {
                setTopSongs(findSongCountArray(youtubeData) );
            } else {
                console.log('Already Ran the function chain!')
            }
    
        },[topSongs]);

        useEffect( () => {
            if(topSongs === 'Nothing in Local Storage' || topSongs === null) {
                console.log('From second useEffect, topSongs empty!')
            } else {
                console.log('2nd useEffect has data in topSongs!')
                setSortedTop10(quicksort(topSongs) );
            }
        },[topSongs]);

        console.log('Here is sortedTop10: ', sortedTop10);

        useEffect( () => {
            if(sortedTop10 === null || sortedTop10 === undefined) {
                console.log('Nothing in sortedTop10!')
            } else {
                console.log('Running spliced: ', splicedOriginalData(sortedTop10));
                const finalData = splicedOriginalData(sortedTop10);
                setSortedTop10Object(finalData);
            }
        }, [sortedTop10])

        console.log('Here is my final output: ', sortedTop10Object);
        console.log('Here are top SOngs', topSongs);


    return (
        <section className='musicCards-parent-container'>
            <h1 className='musicCards-h1'>
                Your Top Tracks of 2022
            </h1>

            {
                sortedTop10Object ?

                sortedTop10Object.map( (songs, index) => {
                    return (
                        <div className='musicCards-card-parent-container' key={index}>
                            <div className='musicCards-card-carousel-wrapper'>
                                <h3 className='musicCards-card-h3'>{songs.title}</h3>
                                <YouTube 
                                    videoId={getYouTubeID(songs.titleUrl)} 
                                    opts={opts} 
                                    onReady={onPlayerReady} 
                                    className='musicCards-card'
                                />
                            </div>
                        </div>
                    )
                })

                :

                <div>
                    <h1>Nothing to Display!</h1>
                </div>
            }

        </section>
    )
    }

export default MusicCards;