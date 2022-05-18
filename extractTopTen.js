/* The input data, required as a module: */
const youtubeData = require('./youtubedata');

function findSongCountArray(arr) {

    let hashMap = {};
  
    for(let songs of arr) {
    
        if(!hashMap[songs.title]) {
          hashMap[songs.title] = 1
        } else {
          hashMap[songs.title]++
        }
    };
    
    hashMap = Object.entries(hashMap);
    return hashMap;
  };


  function pivot (arr, start=0, end=arr.length-1) {
    let pivot = arr[start][1];
    let swapIdx = start; 

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

/* Quicksort Pseudocode:

  - Call the pivot helper on the array
  - When the helper returns to you the updated pivot index, recursively call the pviot helper on the subarray to the left of that index, and the subarray to the right of that index

  - your base case occurs when you consider a subarray with less than 2 elements

 */

function quicksort(arr, left = 0, right = arr.length - 1) {
//Base Case: once the subarrays narrow down to one element:
  if(left < right) {

    let pivotIndex = pivot(arr, left, right); 

    //left side:
    quicksort(arr, left, pivotIndex - 1)

    //right side:
    quicksort(arr, pivotIndex + 1, right);
  };

  return arr.slice(-10);
  
};

function splicedOriginalData(arr) {

    let originalData = youtubeData;
    let newArray = [];
    let finalArray = [];
  
   for(let i = 0; i < arr.length; i++) {
      
  /*Finds first index of the top ten in the original data set:  */
      const indexesOfSongs = originalData.findIndex(object => {
        return object.title === arr[i][0]
      });
     
      newArray.push(indexesOfSongs);
   };
      
    for(let j = 0; j < newArray.length; j++) {
    
    let theIndexOfTopTenSong = newArray[j];
    
    let theTopTenSongData = originalData[theIndexOfTopTenSong];
    finalArray.push(theTopTenSongData);
    
    };
      
      return finalArray;

};
  
console.dir({ result: splicedOriginalData( quicksort ( findSongCountArray(youtubeData) ) ) } );
module.exports = {
    pivot,
    quicksort,
    splicedOriginalData
};
