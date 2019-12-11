const { sleep } = require('./sleep');

function timeout(ms, promise) {
  let timeOutId;
  const timeOutPromise = new Promise((_, reject) => {
    timeOutId = setTimeout(() => reject(Error('Operation Timed Out')), ms);
  });

  return Promise.race([promise, timeOutPromise]).finally(() => {
    clearTimeout(timeOutId);
  });
}

timeout(1000, sleep(500))
  .then(() => console.log('OK'))
  .catch((error) => console.log(error.message));
