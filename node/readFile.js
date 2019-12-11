const fs = require('fs');
const utils = require('util');

function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, content) => {
      if (error) reject(error);

      resolve(content);
    });
  });
}

// boilerplate to convert callback based functions to promise base functions
// const readFile = utils.promisify(fs.readFile);

readFile('test.js', 'utf8')
  .then((content) => console.log(content))
  .catch((error) => console.error(error));

module.exports = {
  readFile
};
