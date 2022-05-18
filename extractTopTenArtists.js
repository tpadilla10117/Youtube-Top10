/* The input data, required as a module: */
const youtubeData = require('./youtubedata');
/* const {
    quicksort,

} = require('./extractTopTen'); */

function findArtistCountArray(arr) {

    let hashMap = {};
    
    for(let songs of arr) {
        let artistNameReformatted = songs.subtitles[0].name.replace('- Topic', '');
      
        if(!hashMap[artistNameReformatted]) {
          hashMap[artistNameReformatted] = 1
        } else if(hashMap[artistNameReformatted]) {
          hashMap[artistNameReformatted]++
        } else {
            continue
        }
      
      }
    
    hashMap = Object.entries(hashMap);
    return hashMap;
  };

console.log( findArtistCountArray(youtubeData)    );


