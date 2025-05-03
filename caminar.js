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

  const recorrer = async()=>{
    // console.log(new URL('todos/almacen/db.json',"", import.meta.url))
    for( let cam in mapaDisco){
        numero=0, volver=true

        while (volver) {
          numero+=numero+1;
          let elNumeroA = "000"+numero
                    let elNumero=elNumeroA.slice(-3)
             let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
             console.log(corto)
                 fs.access(corto, fs.F_OK, (err) => {
                console.log("hola pase por aqui")
                if(err){
                        console.log(`no exite fs : ${corto}`)
            volver=false;
            // break;
            }

        })
break;
//         
// // fin fs.access

//fin de while==================================
}
    



// fin toodo
  }
  }
  recorrer();


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