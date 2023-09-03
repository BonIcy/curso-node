let fs = require('fs');
let superagent = require('superagent');

// funcion para leer un archivo.
let readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file :(');
      resolve(data); 
    });
  });
};

// fucnion para escribir en un archivo
let writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file');
      resolve('success'); 
    });
  });
};

// obtener una imagen aleatoria de una raza de perro y guardarla en un archivo.
let obtenerFotos = async (breed, numImg) => {
  try {
    console.log(`Breed: ${breed}`);

    let imgUrls = [];

    // solicitudes HTTP para obtener el número especificado de imágenes (en este caso 3)
    for (let i = 0; i < numImg; i++) {
      let imgResponse = await superagent.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

      let img = imgResponse.body.message;
      imgUrls.push(img); //pushea la url al array
    }

    console.log(imgUrls);

    // almacenar las url en un archivo
    await writeFilePro(`./Taller-02/${breed}-img.txt`, imgUrls.join('\n'));
    console.log(`Random ${breed} dog images saved to file`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};


// esta funcion lee el archivo que contiene nombres de razas de perros y obtiene imágenes para cada raza
let obtenerCadaImg = async () => {
  try {
    // lee el archivo dog.txt 
    let data = await readFilePro(`${__dirname}/dog.txt`);
    // divide el contenido del archivo en líneas (con el \n), elimina espacios en blanco y filtra las líneas vacías
    let breeds = data.toString().split('\n').map(line => line.trim()).filter(Boolean);

    console.log('Will get dog pics >:D');

    // Itera cada raza y llama a la función obtenerFoto para obtener foto de esa raza
    for (let breed of breeds) {
      await obtenerFotos(breed, 3);
    }

    console.log('Done getting dog pics o-o');
  } catch (err) {
    console.log('ERROR x-x'); 
  }
};
obtenerCadaImg();
