// const fileFetch = require('file-fetch')
import fileFetch from 'file-fetch'

async function leer() {
    console.log(new URL('db.json', import.meta.url).href)
    // const res = await fetch(new URL('db.json', import.meta.url))
const resultado = await fileFetch(new URL('file:///D:/React/Cheerio/cheerio_npm/todos/almacen/almacen-001.txt', import.meta.url))
console.log(await resultado.text())
// console.log(new URL('db.json', import.meta.url))
// console.log(await res)



}

leer()

    
// fileFetch(new URL('db.json', import.meta.url)).then((res) => {         
//   console.log( await res)
// })