const API_URL = 'https://starwars.egghead.training';

const output = document.querySelector('#output');
const spinner = document.querySelector('#spinner');

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

// using the rejection callback in then
function apiCall1() {
  fetch(`${API_URL}/films`)
    .then(() =>
      Promise.reject(Error('Invalid JSON')).then((films) => {
        const filmTitles = getFilmTitles(films);

        output.innerText = filmTitles;
      })
    )
    .then(undefined, (error) => {
      console.warn(error);
    });
}

//  using catch
function apiCall2() {
  fetch(`${API_URL}/films`)
    .then((response) => {
      if (!response.ok) return Promise.reject(Error('Unsuccessful Response'));
      return response.json().then((films) => {
        const filmTitles = getFilmTitles(films);

        output.innerText = filmTitles;
      });
    })
    .catch((error) => {
      console.warn(error);

      output.innerText = error.message;
    })
    .finally(() => {
      spinner.remove();
    });
}

output.innerText = 'Loading ...';

apiCall2();
