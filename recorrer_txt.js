// ===========================================

// const fileExists = path => stat(path).then(() => true, () => false);

// const fileExists = path => {
//   return new Promise((resolve, reject) => {
//     try {
//       stat(path, (error, file) => {
//         if (!error && file.isFile()) {
//           return resolve(true);
//         }

//         if (error && error.code === 'ENOENT') {
//           return resolve(false);
//         }
//       });
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

// console.log(fileExists('db.json'))






// const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

// fs.appendFile("example_file.txt", " - GeeksForGeeks",
//   { encoding: "latin1", mode: 0o666, flag: "a" },
//   (err) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // Get the file contents after the append operation
//           console.log("\nFile Contents of file after append:",
//               fs.readFileSync("example_file.txt", "utf8"));
//       }
//   });

// fs.readdir('./')
// .then(archivos => {
//   for (let archivo of archivos) {
//     console.log(archivo)
//   }
// })
// .catch(error => {
//   console.log(error)
// })

// fs.writeFile('output.txt', data, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });

// ==================================================

//   router.post('/', function(req, res, next) {

//     console.log(req.body);
//     var id = Math.floor((Math.random()*100)+1);

//     var tital = req.body.title;
//     var description = req.body.description;
//     var mynotes = {"Id": id, "Title":tital, "Description": description};

//     fs.readFile('db.json','utf8', function(err,data){
//         var obj = JSON.parse(data);
//         obj.push(mynotes);
//         var strNotes = JSON.stringify(obj);
//         fs.writeFile('db.json',strNotes, function(err){
//             if(err) return console.log(err);
//             console.log('Note added');
//         });

//     })

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
