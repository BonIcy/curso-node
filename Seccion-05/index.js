let fs = require('fs');
let superagent = require('superagent');

let readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file :(');
      resolve(data);
    });
  });
};

let writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file');
      resolve('success');
    });
  });
};

let obtenerFoto = async () => {
  try {
    let data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    let res1Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    let res2Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    let res3Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    let res4Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    let res5Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    let all = await Promise.all([res1Pro, res2Pro, res3Pro, res4Pro, res5Pro]);
    let imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro(`./Seccion-05/${data}-img.txt`, imgs.join('\n'));
    console.log('Random dog image saved to file');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: READY :3';
};

(async () => {
  try {
    console.log('1: Will get dog pics >:D');
    let x = await obtenerFoto();
    console.log(x);
    console.log('3: Done getting dog pics o-o');
  } catch (err) {
    console.log('ERROR x-x');
  }
})();



/*
console.log('1: Will get dog pics');
obtenerFoto()
  .then(x => {
    console.log(x);
    console.log('3: Done getting dog pics');
  })
  .catch(err => {
    console.log('ERROR x-x');
  });
*/
/*
readFilePro(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file');
  })
  .catch(err => {
    console.log(err);
  });
*/