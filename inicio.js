// const axios = require('axios');
// const cheerio = require('cheerio');
import puppeteer from "puppeteer";
// import fs from 'fs'
import fs from "fs/promises";
// const autoScroll = require('puppeteer-autoscroll-down');
// const { scrollPageToBottom } = require('puppeteer-autoscroll-down')
import { scrollPageToBottom } from "puppeteer-autoscroll-down";

// const puppeteer = require('puppeteer');
const mapaDisco = [
  "almacen",
  "fresco",
  "bebidas",
  "puericultura",
  "perfumeria-y-limpieza",
  "megamenu--electrodomesticos?map=productclusternames",
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
const textoContiene = "$ROOT_QUERY.facets";
const textoContieneB = "$ROOT_QUERY.productSearch";

const pageDisco = "?page=3";
const nofundDisco = "devotouy-search-result-3-x-notFoundContainer min-vh-100";
const sleep = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

//================================================================================
async function scrapeBooks(categoria, pagina) {
  let hhtp;
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 1000,
  });
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1080, height: 768 });
  // await page.goto(`https://www.disco.com.uy/${categoria}&page=3` , { waitUntil: 'domcontentloaded' });
  // page.setDefaultTimeout(500)
  // page.setDefaultNavigationTimeout(50000)
  // console.log(page._timeoutSettings.timeout());
  // console.log(page._timeoutSettings.navigationTimeout());

  // console.log(`https://www.disco.com.uy/${categoria}?page=${pagina}`);
  // await page.goto(`https://www.disco.com.uy/${categoria}?page=${pagina}`, {
  //   waitUntil: "networkidle0",
  // });

  console.log(`https://www.disco.com.uy/${categoria}&page=${pagina}`);
  await page.goto(`https://www.disco.com.uy/${categoria}&page=${pagina}`, {
    waitUntil: "networkidle0",
  });


  await page.waitForSelector(".vtex-product-summary-2-x-container");
  await new Promise((r) => setTimeout(r, 5000));

  const textoA = await page.evaluate(() => {
    return document.querySelector("template[data-varname='__STATE__']")
      .innerHTML;
  });
  // console.log(textoA)

  if (
    textoA.substring(0, 50).includes(textoContiene) || textoA.substring(0, 50).includes(textoContieneB)
  ) {
    console.log("eroorr.................");
    await browser.close();
    return false;
  }

  pagina = "000" + pagina;
  pagina = pagina.substr(-3);

if(categoria.length>30){
  categoria=categoria.slice(0,27)
}

  await fs.writeFile(`./todos/${categoria}-${pagina}.txt`, textoA);
  // https://www.disco.com.uy/almacen?page=3

  // await scrollPageToBottom(page, {
  //   size: 700,
  //   delay: 2000,

  // });
  // // stepsLimit:100,

  // await sleep(3000);
  console.log(`salimos`);
  // const htmlA= await page.content()
  //  await fs.writeFile('./almacen.txt', htmlA);

  // page.on('console', msg => console.log(msg.text()));

  // await page.screenshot({path: './disco1.png', fullPage: true});
  // await page.screenshot({path: './fullS.png'});
  // const books = await page.evaluate(() => {
  //     return Array.from(document.querySelectorAll('.product_pod')).map(book => ({
  //         title: book.querySelector('h3 a')?.title.trim(),
  //         price: book.querySelector('.price_color')?.innerText.trim(),
  //         availability: book.querySelector('.instock.availability')?.innerText.trim()
  //     }));
  // });

  // const html = await page.content()
  // console.log('sale page: ',html)
  await browser.close();
  // console.log(books);
  return true;
}

const testMe = async () => {
  let pagina = 1;
  let camino = true;
  let contador = 1;

  do {
    console.log("entro ", contador);

    const salida = await scrapeBooks(mapaDisco[5], contador);
    console.log(salida);
    if (salida == false) {
      console.log("salida horrorosa");
      camino = false;
      // break;
    } else {
      console.log("salida existosa");
      contador++;
      // break;
    }
  } while (camino === true);
};

console.log("vamos.....");
testMe();

// (async () => {

//   try {
//     console.log(`mjdmjdjd ks `)
//     const url ="https://www.disco.com.uy/"
//     console.log(url)
//     const browser = await puppeteer.launch({
//       headless: true
//   });

//   const page = await browser.newPage();
//     // await page.emulate(puppeteer.devices['iPhone 6']);
//     await page.goto(url);

//  // Set screen size
//  await page.setViewport({ width: 1080, height: 1024 });

//     // await page.screenshot({path: './full.png', fullPage: true});
//     await page.screenshot({path: './fullS.png'});
//     conaole.log('consola consola')
//     conaole.log(page.html())
//     await browser.close();

// } catch (error) {
//   console.log(error);
// }

// })
