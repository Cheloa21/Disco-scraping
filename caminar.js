import { writeFile, appendFile, readdir, stat, readFile } from "fs/promises";
import fileFetch from "file-fetch";
import fs from "fs";
import { log } from "console";

var numero, volver;
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

const existeCamino = async (caminar) => {
  let repuesta;
  return new Promise((resolve, reject) => {
    fs.access(caminar, fs.F_OK, (err) => {
      if (err) resolve(false);
      else resolve(true);
    });
  });
};

const destriparDatos = async (datos) => {
  let lista = [];
  // console.log("entro en destri`par:",datos)
  let datosA = JSON.stringify(datos[0]);
  // console.log(`entra en srig`,datosA.length)

  const leerB = JSON.parse(datosA);

  // console.log(leerB)
  for (let txt in leerB) {
    // console.log(`el TXT`,txt)
    if (txt.length < 18) {
      if (txt.includes("Product:sp-")) {
        lista.push(txt.replace(`Product:sp-`, ``));
        // console.log(`el valor: `, txt.replace(`Product:sp-`, ``));
      }
    }
    // fin  cargar lista lista===============
  }

  let todos = [];
  for (let num in lista) {
    console.log(`sale:`, `Product:sp-${lista[num]}`);

    // console.log(leerB[`Product:sp-${lista[num]}`]["productId"])
    const productId = leerB[`Product:sp-${lista[num]}`]["productId"];
    // console.log(leerB[`Product:sp-${lista[num]}`]["productName"])
    const productName = leerB[`Product:sp-${lista[num]}`]["productName"];
    // console.log(leerB[`Product:sp-${lista[num]}`]["description"])
    const description = leerB[`Product:sp-${lista[num]}`]["description"];
    // console.log(leerB[`Product:sp-${lista[num]}`]["brand"])
    const marca = leerB[`Product:sp-${lista[num]}`]["brand"];

    // console.log(leerB[`Product:sp-${lista[num]}`]["link"])
    const link = leerB[`Product:sp-${lista[num]}`]["link"];
    // console.log(leerB[`Product:sp-${lista[num]}`]["linkText"])
    const linkText = leerB[`Product:sp-${lista[num]}`]["linkText"];

    // console.log(leerB[`Product:sp-${lista[num]}`]["categories"]["json"])
    const categoria = leerB[`Product:sp-${lista[num]}`]["categories"]["json"];

    // console.log(leerB[`$Product:sp-${lista[num]}.priceRange.sellingPrice`]["highPrice"])
    const precio =
      leerB[`$Product:sp-${lista[num]}.priceRange.sellingPrice`]["highPrice"];

    // console.log(leerB[`Product:sp-${lista[num]}.specificationGroups.1.specifications.0`]["values"]["json"][0])
    
    let esDolar
    // console.log(obj1.hasOwnProperty('nameDoctor'))
let contarSi=leerB.hasOwnProperty([`Product:sp-${lista[num]}.specificationGroups.1.specifications.0`])

    if(contarSi==true){
      esDolar =
        leerB[`Product:sp-${lista[num]}.specificationGroups.1.specifications.0`]["values"]["json"][0];
    } else {
      //  console.log(leerB.hasOwnProperty([`Product:sp-${lista[num]}`][`specificationGroups.1`]))
      esDolar = `No`
     
   
    }
    

    todos.push({
      productId,
      productName,
      description,
      marca,
      link,
      linkText,
      precio,
      categoria,
      esDolar,
    });
  }

  // console.log(todos)
  return todos;

  //fin destriparDatos =======================
};

const cargarDatos = async (caminar) => {
  const losDatos = new Promise((res, rej) => {
    let contenido = [];

    // console.log(`camino ...`,caminar)

    fs.readFile(caminar, "utf8", (error, datos) => {
      if (error) throw error;
      // console.log("El contenido archivo: ", datos);
      datos = datos.replace("<script>", "").replace("</script>", "");
      contenido.push(JSON.parse(datos));

      return res(contenido);
    });
    //fin promese losDAtos
  });
  // console.log( await losDatos)

  const losDatosA = await losDatos;
  
  var obj = await JSON.stringify(losDatosA);

  var length = obj.length;
  // console.log(`largo `, length);
 

  if (length > 0) {
    let contenido = [];
    console.log(`vamos a destripar`);
    let salidaDD = await destriparDatos(losDatosA);
  
    let myDB = await existeCamino("./db.json");
    if (myDB == true) {
      console.log(`entro en myDB`);

      
      const data = fs.readFileSync("./db.json", `utf8`);
      let myDato = JSON.stringify(data);

      if (myDato.length > 0) {
        // console.log(`hay algo`, contenido)
        console.log(`hay algo ====================`);
        contenido = JSON.parse(data);
        // salidaDD=await contenido.push(salidaDD)
        contenido.push(salidaDD);
        let fileContents = JSON.stringify(contenido);
        // fs.writeFile('./db.json', "jlksdfksdkf sdl");
        fs.writeFile("./db.json", fileContents, "utf8", (err) => {
          if (err) {
            console.error("Error writing file contenido:", err);
            return false;
          }
          console.log("File written successfully contenido!");
          return true;
        });
      }

      // fin if myÇDB=================
    } else {
      let fileContents = JSON.stringify(salidaDD);
      // fs.writeFile('./db.json', "jlksdfksdkf sdl");
      fs.writeFile("./db.json", fileContents, "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return false;
        }
        console.log("File written successfully!");
        return true;
      });
    }

    // ifff ==============================
  }


  // din datos========================
};

const recorrer = async()=>{
  // console.log(new URL('todos/almacen/db.json',"", import.meta.url))
  for( let cam in mapaDisco){
    let myCamino 
    
    numero=0, volver=false

      do {
        
        numero=numero+1;
            let elNumeroA = "000"+numero
                      let elNumero=elNumeroA.slice(-3)
               let corto= `./todos/${mapaDisco[cam]}/${mapaDisco[cam]}-${elNumero}.txt`
               console.log(`camino cirto `,corto)
           
               volver = await existeCamino(corto) 
if(volver){
  let xx = await cargarDatos(corto);

  console.log(`xx`, xx)
}



        console.log(`retrono `, volver)
          



      } while (volver==true);



// fin toodo
}
}


recorrer();
























// recorrer();
// let miCamino = await existeCamino(
//   "./todos/megamenu--electrodomesticos/megamenu--electrodomesticos-006.txt"
// );

// let xx = await cargarDatos(
//   "./todos/megamenu--electrodomesticos/megamenu--electrodomesticos-006.txt"
// );
// console.log(miCamino)
// console.log('salida xx ', xx)

// const myJson = new Promise((resJson, rejJson) => {

//   //miJson
// })
