import * as rp from'request-promise';
import * as $ from 'cheerio';
// const $ = require('cheerio');

const potusParse = function(url) {
  return rp(url)
    .then(function(html) {
      return {
        name: $('.firstHeading', html).text(),
        birthday: $('.bday', html).text(),
      };
    })
    .catch(function(err) {
      //handle error
    });
};

export default potusParse;