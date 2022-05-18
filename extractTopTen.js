const youtubeData = require('./youtubedata');

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
    return hashMap;
  };

console.log('My data from extractTopTen: ', findSongCountArray(youtubeData));