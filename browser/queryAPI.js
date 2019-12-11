const API_URL = 'https://starwars.egghead.training';

const output = document.querySelector('#output');
const spinner = document.querySelector('#spinner');

function queryApi(endPoint) {
  return fetch(`${API_URL}/${endPoint}`).then((response) => {
    if (!response.ok) throw Error('Unsuccessful Response');

    return response.json();
  });
}

Promise.all([queryApi('films'), queryApi('planets'), queryApi('species')])
  .then(([films, planets, species]) => {
    output.innerText = `${films.length} Films, ${planets.length} Planets, ${species.length} Species`;
  })
  .catch((error) => {
    output.innerText = ':(';
    console.error(error);
  })
  .finally(() => spinner.remove());
