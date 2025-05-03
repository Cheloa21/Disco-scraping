//import myModule from "someModule" //
import * as rp from'request-promise';
// const rp = require('request-promise');
import * as $ from 'cheerio';
// const $ = require('cheerio');
import  potusParse from "./potusParse.js";
// const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
var options = {
  uri: 'https://jsonplaceholder.typicode.com/posts/1',
  json: true
};

rp(options).then(function(data){
  console.log(data)
  
  
})














// rp(url)
// .promise()
//   .then(function(html) {
//     //success!
//     const wikiUrls = [];
//     for (let i = 0; i < 45; i++) {
//       wikiUrls.push($('big > a', html)[i].attribs.href);
//     }
//     return Promise.all(
//       wikiUrls.map(function(url) {
//         return potusParse('https://en.wikipedia.org' + url);
//       })
//     );
//   })
//   .then(function(presidents) {
//     console.log(presidents);
//   })
//   .catch(function(err) {
//     //handle error
//     console.log(err);
//   });
