function sleep(ms) {
  return new Promise((resolve) => {
    //  throw Error('Unexpected Error occured');

    setTimeout(resolve, ms);
  });
}

// usage example
console.log('start');

sleep(1000)
  .then(() => {
    console.log(' one sec passed');

    return sleep(1000);
  })
  .then(() => console.log('two sec passed'))
  .catch((error) => console.error(error));

module.exports = {
  sleep
};
