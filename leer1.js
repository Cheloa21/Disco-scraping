// const data = require('./db.json');

// const fs = require("fs"),
import fs from 'fs'   
// import * as $ from 'cheerio';

const NOMBRE_ARCHIVO = "BaseA.json";

// fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
//     if (error) throw error;
//     console.log("El contenido es: ", datos);
// });

const content = 'Some content!\n\r sdsdasdassad asda';
// fs.writeFile('./test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });


// fs.appendFile('./test.txt', content,  { flag: 'a' }, err => {
//     if (err) {
//       console.error(err);
//     } else {
//       // file written successfully
//     }
//   });
  
// fs.access('./db.json', fs.F_OK, (err) => {
//     console.log(`${'./test.txt'} ${err ? 'does not exist' : 'exists'}`);
//   });

// ==========================================

fs.stat('./db.json',(err,stats)=>{
    console.log(stats.isDirectory());
        // console.log(stats);
        console.log(stats.size);
        console.log(stats.blksize);
})


// import { stat } from 'node:fs';

// const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

// for (let i = 0; i < pathsToCheck.length; i++) {
//   stat(pathsToCheck[i], (err, stats) => {
//     console.log(stats.isDirectory());
//     console.log(stats);
//   });
// }


// =====================================================

//   appendFile('message.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   }); 

// import data from './BaseA.json' assert { type: 'json' };

// console.log(data);


// fetch('file:./BaseA.json')
// .then((json) => console.log(json)); 


// .then((response) => response.json())
//     .then((json) => console.log(json));

