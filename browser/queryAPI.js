const API_URL = 'https://starwars.egghead.training';

const output = document.querySelector('#output');
const spinner = document.querySelector('#spinner');

async function queryApi(endPoint) {
  const response = await fetch(`${API_URL}/${endPoint}`);

  if (!response.ok) throw Error('Unsuccessful Response');

  return response.json();
}

// function queryApi(endPoint) {
//   return fetch(`${API_URL}/${endPoint}`).then((response) => {
//     if (!response.ok) throw Error('Unsuccessful Response');

//     return response.json();
//   });
// }

function main1() {
  Promise.all([queryApi('films'), queryApi('planets'), queryApi('species')])
    .then(([films, planets, species]) => {
      output.innerText = `${films.length} Films, ${planets.length} Planets, ${species.length} Species`;
    })
    .catch((error) => {
      output.innerText = ':(';
      console.error(error);
    })
    .finally(() => spinner.remove());
}

async function main2() {
  try {
    const [films, planets, species] = await Promise.all([
      queryApi('films'),
      queryApi('planets'),
      queryApi('species')
    ]);

    output.innerText = `${films.length} Films, ${planets.length} Planets, ${species.length} Species`;
  } catch (e) {
    console.error(e);

    output.innerText = ':(';
  } finally {
    spinner.remove();
  }
}

main2();
