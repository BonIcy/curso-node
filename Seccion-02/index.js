let fs = require('fs');
let http = require('http');
let url = require('url');
let slugify = require('slugify');
let replaceTemplate = require('./modules/replaceTemplate'); //módulo local

// ------------------ CONCEPTOS ------------------

//.prettierrc : como se tiene en 'singleQuote' formateará el código utilizando comillas simples en lugar de comillas dobles para representar strings.
// fs.writeFile : escribir datos en un archivo de manera asíncrona
//fs.readFileSync : sirve para leer el contenido de un archivo de manera síncrona, lo que significa que el programa se bloqueará hasta que se complete la operación de lectura
// writeHead : usado para escribir encabezados (headers) de respuesta HTTP en la respuesta que se envía al cliente después de recibir una solicitud HTTP. 
// __dirname : variable global proporcionada por node que contiene la ruta del directorio en el que se encuentra el archivo actual

// ------------------ ARCHIVOS ------------------
// FILES

// Blocking, synchronous way
// let textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// let textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');
// ------------------ CREANDO EL SERVER ------------------

// obtener los archivos de plantillas HTML y los datos json requeridos
let tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
let tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
let tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
let dataObj = JSON.parse(data);
// array de slugs (versiones formateadas para URL, como endpoints) para cada producto
let slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);
// Creando el server HTTP
let server = http.createServer((req, res) => {
  let { query, pathname } = url.parse(req.url, true);
  // ------ Manejo de rutas ------

  // overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    let cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    let output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // product page
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    let product = dataObj[query.id];
    let output = replaceTemplate(tempProduct, product);
    res.end(output);

    // api
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);

    // not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});
//iniciar el server
server.listen(8000, '127.0.0.1', () => {
  console.log('Server corriendose en puerto 8000');
});