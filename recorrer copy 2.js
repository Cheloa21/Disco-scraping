import { readFile,writeFile } from 'fs/promises';
import fs from "fs";


// const fs = require('fs');
// const json = JSON.parse(
//   await readFile(
//     new URL('./todos/tecnologia/tecnologia-002.txt', import.meta.url)
//   )
// );

const textoContiene = "$ROOT_QUERY.facets";
const textoContieneB = "$ROOT_QUERY.productSearch";
var lista=[]


// const json = JSON.parse(

// const texto = ()=> await readFile(
//       new URL('./todos/tecnologia/tecnologia-002.txt', import.meta.url)
//     )

// return texto

// );
  

// const json = async ()=>{
// var i=0;
//     // fetch('./inicio.js')
//     //     .then(obj => console.log(obj))
//     // .then(response => response.json())


//     const leer = fs.readFileSync('./todos/tecnologia/tecnologia-002.txt','utf8')    

//     const leerA= await leer.replace("<script>","").replace("</script>","")
//     // console.log(leerA)
//     writeFile("textoA.txt", leerA)
//     const leerB= JSON.parse(leerA)
//     // console.log(leerB)
    
//     writeFile("textoBJSON.txt", JSON.stringify(leerB))

//   const pepe = new Promise((res)=>{
//     for ( let d in leerB){
//         i++;
//         // if (i>19 && i<50) console.log(i, d, "\n\r " ,leerB[d])
//         // if (i>19 && i<50) console.log(i, d, "\n\r ")
//         if (d.substring(0, 50).includes(textoContiene) || d.substring(0, 50).includes(textoContieneB) ) {
//                     return;
//           } else {
//     //&& d.includes("Product:")
//             if(d.length < 18  )
//             //   console.log(i, d, d.length, "\n\r ")
//         if(d.includes("Product:")){
    
//             // console.log(d.replace("Product:sp-","").trim())
//            const lis=  d.replace("Product:sp-","").trim()
//            console.log("en lista ", lis)
//          lista.push(lis)
//         }
//           }
    
//     }

//     return lista

//    })

//    return pepe

// console.log(leerB["$Product:sp-324559.priceRange.listPrice"])
// console.log(leerB["Product:sp-324559"]["productName"])
// console.log(leerB["$Product:sp-324559.priceRange.sellingPrice"])
// console.log(leerB["$Product:sp-324559.priceRange.sellingPrice"].lowPrice)

// console.log(leerB["Product:sp-324559"]["$Product:sp-324559.priceRange"])
// console.log(leerB["$Product:sp-324559.priceRange"])



        // console.log(JSON.parse(leerA))
// const elJson = await leer 
// elJson=elJson.replace("<script>","").replace("</script>","")       
// return JSON.parse(elJson)
// console.log(elJson)
// }


  



// import * as todo from "./todos/tecnologia/tecnologia-001.txt" 

let json = new Promise(function(myResolve, myReject) {
    let x = 10;
  
    const leer = fs.readFileSync('./todos/tecnologia/tecnologia-002.txt','utf8')    

        const leerA=  leer.replace("<script>","").replace("</script>","")
        // console.log(leerA)
        writeFile("textoA.txt", leerA)
        const leerB= JSON.parse(leerA)
        // console.log(leerB)
        
        writeFile("textoBJSON.txt", JSON.stringify(leerB))

  // some code (try to change x to 5)
  let pepe = new Promise(function(myRes, myRej) {
  
    for ( let d in leerB){
                i++;
                // if (i>19 && i<50) console.log(i, d, "\n\r " ,leerB[d])
                // if (i>19 && i<50) console.log(i, d, "\n\r ")
                if (d.substring(0, 50).includes(textoContiene) || d.substring(0, 50).includes(textoContieneB) ) {
                            return;
                  } else {
            //&& d.includes("Product:")
                    if(d.length < 18  )
                    //   console.log(i, d, d.length, "\n\r ")
                if(d.includes("Product:")){
            
                    // console.log(d.replace("Product:sp-","").trim())
                   const lis=  d.replace("Product:sp-","").trim()
                   console.log("en lista ", lis)
                 lista.push(lis)
                }
                  }
            
            }
            return myRes(lista)







})

myResolve( pepe)
  });
  
  json.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );



json().then((list)=>{
    console.log("sale")
    
    console.log(list)
})

    // if (x == 0) {
    //   myResolve("OK");
    // } else {
    //   myReject("Error");
    // }
