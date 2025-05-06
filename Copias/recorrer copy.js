import { readFile, writeFile,appendFile, readdir } from "fs/promises";
import fs from "fs";
// import { forever } from "request";

const textoContiene = "$ROOT_QUERY.facets";
const textoContieneB = "$ROOT_QUERY.productSearch";
let myPromise = new Promise(function (myResolve, myReject) {
  let lista = [];
  let i = 0;
  let filePath = "./todos/tecnologia/tecnologia-002.txt";

  if (fs.existsSync(filePath)) {
    console.log("The file exists");
  } else {
    return myReject("The file does not exist");
  }
  const leer = fs.readFileSync(filePath, "utf8");

  const leerA = leer.replace("<script>", "").replace("</script>", "");
  //  console.log(JSON.parse(leerA))
  writeFile("BaseA.json", leerA);
  const leerB = JSON.parse(leerA);

  writeFile("BaseBJSON.json", JSON.stringify(leerB));

  for (let txt in leerB) {
    if (txt.length < 18) {
      if (txt.includes("Product:sp-")) {
        lista.push(txt.replace(`Product:sp-`, ``));
        // console.log(`el valor: `, txt.replace(`Product:sp-`, ``));
      }
    }
  }
  console.log(lista.length);
  // lista.push("salen Valores:", leerA);

let todo =[{
  lista:lista,
  todos: leerA 

}]





  // console.log(lista)
  return myResolve(todo);



  //el fin
});

myPromise
  .then(
    function (value) {
     console.log(value[0]["lista"])
     console.log("=================================================================")
let numero =value[0]["lista"][1]
// console.log(numero)

let leerC = JSON.parse(value[0]["todos"])
// console.log(leerC)
console.log(leerC[`Product:sp-${numero}`]["productId"])
console.log(leerC[`Product:sp-${numero}`]["productName"])
console.log(leerC[`Product:sp-${numero}`]["description"])
console.log(leerC[`Product:sp-${numero}`]["brand"])
console.log(leerC[`Product:sp-${numero}`]["link"])
console.log(leerC[`Product:sp-${numero}`]["linkText"])
console.log(leerC[`Product:sp-${numero}`]["categories"]["json"])
console.log(leerC[`$Product:sp-${numero}.priceRange.sellingPrice`]["highPrice"])
console.log(leerC[`Product:sp-${numero}.specificationGroups.1.specifications.0`]["values"]["json"][0])
console.log("=================================================================")

let listaNumeros = value[0]["lista"]

for (const lNum in listaNumeros) {
      console.log(`${lNum}: ${listaNumeros[lNum]}`);
      // console.log(lNum)
  }






console.log("=================================================================")

  
  console.log("=================================================================")
  
    
    
});

// ===========================================


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
