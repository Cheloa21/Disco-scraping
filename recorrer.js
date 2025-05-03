import { writeFile, appendFile, readdir,stat,readFile} from "fs/promises";
import fs from "fs";
import { exists } from 'node:fs';
// import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import fetch from 'node-fetch';


const textoContiene = "$ROOT_QUERY.facets";
const textoContieneB = "$ROOT_QUERY.productSearch";
let myPromise = (filePath) => {
  return new Promise(function (myResolve, myReject) {
    let lista = [];
    let i = 0;
    // let filePath = "./todos/tecnologia/tecnologia-002.txt";
    console.log(filePath);

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

    let todo = [
      {
        lista: lista,
        todos: leerA,
      },
    ];

    // console.log(lista)
    return myResolve(todo);

    //el fin
  });
};

// =================== fin de promesa ===========================
myPromise("./todos/tecnologia/tecnologia-002.txt").then(function (value) {
  //  console.log(value[0]["lista"])
  console.log(
    "================================================================="
  );
  let numero = value[0]["lista"][1];
  // console.log(numero)

  let leerC = JSON.parse(value[0]["todos"]);
  // console.log(leerC)
  // console.log(leerC[`Product:sp-${numero}`]["productId"])
  // console.log(leerC[`Product:sp-${numero}`]["productName"])
  // console.log(leerC[`Product:sp-${numero}`]["description"])
  // console.log(leerC[`Product:sp-${numero}`]["brand"])
  // console.log(leerC[`Product:sp-${numero}`]["link"])
  // console.log(leerC[`Product:sp-${numero}`]["linkText"])
  // console.log(leerC[`Product:sp-${numero}`]["categories"]["json"])
  // console.log(leerC[`$Product:sp-${numero}.priceRange.sellingPrice`]["highPrice"])
  // console.log(leerC[`Product:sp-${numero}.specificationGroups.1.specifications.0`]["values"]["json"][0])
  console.log(
    "============= inicio for===================================================="
  );

  let listaNumeros = value[0]["lista"];
 let todosLosCampos=[]
  for (const lNum in listaNumeros) {
    let campos = {},
      valor;
    // console.log(`${lNum}: ${listaNumeros[lNum]}`);
    valor = listaNumeros[lNum];
    // campos.push=valor
    // campos.pepe= Math.floor(valor)+1
    campos.Id = leerC[`Product:sp-${valor}`]["productId"];
    campos.nombre = leerC[`Product:sp-${valor}`]["productName"];
    campos.descripcion = leerC[`Product:sp-${valor}`]["description"];
    campos.marca = leerC[`Product:sp-${valor}`]["brand"];
    campos.link = leerC[`Product:sp-${valor}`]["link"];
    campos.linkText = leerC[`Product:sp-${valor}`]["linkText"];
    campos.categoria = leerC[`Product:sp-${valor}`]["categories"]["json"];
    campos.precio =
      leerC[`$Product:sp-${valor}.priceRange.sellingPrice`]["highPrice"];
    campos.grupo = leerC[`Product:sp-${valor}.specificationGroups.1.specifications.0`]["values"]["json"][0];
    campos.grupoD = leerC[`Product:sp-${valor}.properties.0`]["values"]["json"][0];
      
//  "Product:sp-307716.specificationGroups.1.specifications.0"
    // console.log(
    //   "==================fin for==============================================="
    // );
    // console.log(campos);
   todosLosCampos.push(campos)
    // console.log(lNum)
  }

  console.log(
    "=======================todos los campos=========================================="
  );
// console.log(todosLosCampos)

const filePathP = resolve('./BaseA.json');
readFile(filePathP, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  // const jsonData = JSON.parse(data);
// console.log(jsonData);
});




exists('./db.json', (exists) => {
  console.log(exists)
  if(!exists){
  console.log('Note added nuevo');
  var strNotes = JSON.stringify(todosLosCampos);
  writeFile('db.json',strNotes, function(err){
            if(err) return console.log(err);
          });

}

if(exists){
  console.log('Note agregada');
async function lee2() {
  // const laUrl=new URL("BaseBJSON.json", ".")
  // console.log(laUrl)
  // const lectura = await fetch(laUrl)
  // console.log(lectura)
  
}

lee2();

};

})

// console.log(stat('./db.json'))

// stat('./db.json', function(err, stat) {
//   if(err == null) {
//     console.log('error null')
//   } else if(err.code == 'ENOENT') {
//       // NO exist
//   } 
// });

    // readFile('./db.json','utf8', function(err,data){
    //     var obj = JSON.parse(data);
    //     obj.push(todosLosCampos);
    //     var strNotes = JSON.stringify(obj);
    //     writeFile('db.json',strNotes, function(err){
    //         if(err) return console.log(err);
    //         console.log('Note added');
    //     });

    // })







  console.log(
    "========================= fin tods los campos ========================================"
  );
});








// readFile('./db.json','utf8', function(err,data){
//   console.log("entra en readfile")
//   if(err) return console.log("el error: ".err);
//   console.log(data)
//   console.log("== fin data ==")
//         var obj = JSON.parse(data);
//         obj.push(todosLosCampos);
//         var strNotes = JSON.stringify(obj);
//         writeFile('./db.json',strNotes, function(err){
//           if(err) return console.log("el error: ".err);
//         });
// })