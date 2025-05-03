import axios from 'axios'
import fs from 'fs'
import * as cheerio from 'cheerio'

// const cheerio = require('cheerio'); 
// const fs = require('fs');
// const path = require('path');

// const axios = require('axios'); 
const params = {
    headers: {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
};
// https://www.devoto.com.uy/almacen

axios.get('https://www.devoto.com.uy/almacen?page=9', params) 
	.then(({ data }) => {
        try {
            fs.writeFileSync('./fileArticulo9.txt', data);
          } catch (err) {
            throw err;
          }
        
        // console.log(data)
        const $ = cheerio.load(data);
        console.log($.html())
    
    });