/* The input data, required as a module: */
const youtubeData = require('./youtubedata');
const {
    quicksort,

} = require('./extractTopTen');

function findArtistCountArray(arr) {

    let hashMap = {};
  
    for(let songs of arr) {
        
        let found = false;

        if(songs.hasOwnProperty('subtitles') ) {
            found = true;
        } else {
            found = false;
        };
        
        if(found === true && !hashMap[songs.subtitles[0].name.replace('- Topic', '')]) {
            hashMap[songs.subtitles[0].name.replace('- Topic', '')] = 1
        } else if (found === true && hashMap[songs.subtitles[0].name.replace('- Topic', '')] ) {
            hashMap[songs.subtitles[0].name.replace('- Topic', '')]++
        }; 
    
    }
    
    hashMap = Object.entries(hashMap);
    return hashMap;
  };

console.dir(  {topTenArtists: quicksort(findArtistCountArray(youtubeData) )   } );


