import { writeFile, appendFile, readdir,stat,readFile} from "fs/promises";
import fileFetch from 'file-fetch';
import fs from "fs";

var numero, volver
const mapaDisco = [
    "almacen",
    "fresco",
    "bebidas",
    "puericultura",
    "perfumeria-y-limpieza",
    "megamenu--electrodomesticos",
    "tecnologia",
    "celulares-y-telefonia",
    "tv-y-audio",
    "muebles",
    "deporte-y-tiempo-libre",
    "ferreteria-y-automovil",
    "juguetes",
    "papeleria",
    "hogar",
    "mascotas",
    "varios",
  ];
  
const existeCamino = async (caminar) =>{
 let repuesta
 return new Promise((resolve, reject) => {
  fs.access(caminar, fs.F_OK, (err) => {
    if (err) resolve(false)
    else resolve(true)
  })
})
}

const destriparDatos = async(datos)=>{
  let lista = [];
  let i = 0;
  // console.log(`llego`, datos)
  const leerB = JSON.parse(datos);
  writeFile("BaseBJSON.json", JSON.stringify(leerB));
  // extrarer nro producto
  for (let txt in leerB) {
    if (txt.length < 18) {
      if (txt.includes("Product:sp-")) {
        lista.push(txt.replace(`Product:sp-`, ``));
        // console.log(`el valor: `, txt.replace(`Product:sp-`, ``));
      }
    }
  }
  // console.log(`largo: `,lista.length);
  //===========================
let todos =[]
  for (let num in lista ){
console.log(`sale:`, lista[num])


// console.log(leerB[`Product:sp-${lista[num]}`]["productId"])
const productId = leerB[`Product:sp-${lista[num]}`]["productId"]
  // console.log(leerB[`Product:sp-${lista[num]}`]["productName"])
const productName= leerB[`Product:sp-${lista[num]}`]["productName"]  
  // console.log(leerB[`Product:sp-${lista[num]}`]["description"])
const description =leerB[`Product:sp-${lista[num]}`]["description"]  
  // console.log(leerB[`Product:sp-${lista[num]}`]["brand"])
const marca =leerB[`Product:sp-${lista[num]}`]["brand"]

  // console.log(leerB[`Product:sp-${lista[num]}`]["link"])
const link=leerB[`Product:sp-${lista[num]}`]["link"]  
  // console.log(leerB[`Product:sp-${lista[num]}`]["linkText"])
const linkText=leerB[`Product:sp-${lista[num]}`]["linkText"]

  // console.log(leerB[`Product:sp-${lista[num]}`]["categories"]["json"])
const categoria=leerB[`Product:sp-${lista[num]}`]["categories"]["json"]

  // console.log(leerB[`$Product:sp-${lista[num]}.priceRange.sellingPrice`]["highPrice"])
const precio =leerB[`$Product:sp-${lista[num]}.priceRange.sellingPrice`]["highPrice"]

  // console.log(leerB[`Product:sp-${lista[num]}.specificationGroups.1.specifications.0`]["values"]["json"][0])
const esDolar=leerB[`Product:sp-${lista[num]}.specificationGroups.1.specifications.0`]["values"]["json"][0]



}






  //fin destriparDatos =======================
}



const cargarDatos = async(caminar)=>{
let existe, contenido
existe = await existeCamino(`./db.json`)
if (existe){
fs.readFile(`./db.json`, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("El contenido es: ", datos);
});
fs.readFile(caminar, 'utf8', (error, elDatos) => {
  if (error) throw error;
  elDatos= elDatos.replace("<script>", "").replace("</script>", "");
  // console.log("El contenido es: ", datos);
destriparDatos(elDatos)


});



//fin IF 
}else{

 //fin IF ELSE 
}


}



  const recorrer = async()=>{
    // console.log(new URL('todos/almacen/db.json',"", import.meta.url))
    for( let cam in mapaDisco){
        numero=0, volver=false

        do {
          
          numero=numero+1;
              let elNumeroA = "000"+numero
                        let elNumero=elNumeroA.slice(-3)
                 let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
                 console.log(`camino cirto `,corto)
             volver = await existeCamino(corto)   
          console.log(`retrono `, volver)
            



        } while (volver==true);



// fin toodo
  }
  }
  // recorrer();
  cargarDatos('./todos/megamenu--electrodomesticos/megamenu--electrodomesticos-006.txt')



//   while (volver==true) {
//     numero+=numero+1;
//     let elNumeroA = "000"+numero
//               let elNumero=elNumeroA.slice(-3)
//        let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
//        console.log(corto)
//            fs.access(corto, fs.F_OK, (err) => {
//           // console.log("hola pase por aqui")
//           if(err){
//                   console.log(`no exite fs : ${corto}`)
//       volver=false;
//       // break;
//       } else {
//         volver=true
//       }

//   })
// break;
// //         
// // // fin fs.access

// //fin de while==================================
// }


//   while (i < 6) {
//     if (i === 3) {
//       break;
//     }
//     i += 1;
//   }

// let elNumeroA = "000"+numero
//         let elNumero=elNumeroA.slice(-3)

//         let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
        
//     fs.access(corto, fs.F_OK, (err) => {
//     console.log("hola pase por aqui")
//     if(err){

// console.log(`no exite fs : ${corto}`)

//     }


//   });

  // console.log(`${'./test.txt'} ${err ? 'does not exist' : 'exists'}`);
    // console.log(`${camino} ${err ? ' does not exist' : ' exists'}`);

    // console.log(`base:`, base)
        // console.log(`archivo:`,archivo)
        // console.log(`camino:`, camino)
    
        // let camino=(new URL(`./todos/${cam}/${cam}-001.txt`))

        // almacen-001.txt

        // console.log(new URL(camino, import.meta.url))
        //    throw new Error( `ERROPR: ${err} ${camino}` );

    // console.log(new URL('./todos/almacen/db.json', import.meta.url))
    // console.log(`${corto} ${err ? ' does not exist' : ' exists'}`);

    // do {
    //   console.log("entro en do")
      
    //   let elNumeroA = "000"+numero
    //           let elNumero=elNumeroA.slice(-3)
    //    let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
    //    console.log(corto)
    //        fs.access(corto, fs.F_OK, (err) => {
    //       console.log("hola pase por aqui")
    //       if(err){
      
    //   console.log(`no exite fs : ${corto}`)
    //   volver=false
    //   break;
    //   } else {
    //       volver=true
    //   }
      
    //     });
    //   // fin fs.access
    //   numero++;
      
          
    //   } while (volver====true);