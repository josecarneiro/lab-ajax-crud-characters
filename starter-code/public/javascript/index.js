const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    const $listCharacters = document.getElementsByClassName('characters-container');
    $listCharacters.innerHTML = '';

    charactersAPI.getFullList()
      .then(characters => {
        for (let character of characters) {

          $listCharacters.innerHTML += `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>`;

          console.log('after appending', $listCharacters.innerHTML);

        }
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});