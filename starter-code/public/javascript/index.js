const charactersAPI = new APIHandler('http://localhost:8000');

const $name = document.getElementsByClassName('name');
const $occupation = document.getElementsByClassName('occupation');
const $cartoon = document.getElementsByClassName('cartoon');
const $weapon = document.getElementsByClassName('weapon');
const $inputById = document.getElementById('searchOne');
const $mainContainer = document.getElementById('main-container');
const $newChar = document.getElementById('new-character-form');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function(event) {
      charactersAPI.getFullList().then(result => {
        for (let i = 0; i < result.data.length; i++) {
          const $stuffToAdd = `
          <div class="characters-container">
          <div class="character-info">
            <div class="name">Character Name: ${result.data[i].name}</div>
            <div class="occupation">Character Occupation: ${result.data[i].occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${result.data[i].cartoon}</div>
            <div class="weapon">Character Weapon: ${result.data[i].weapon}</div>
          </div>
        </div>
          `;
          const $newDiv = document.createElement('div');
          $newDiv.innerHTML = $stuffToAdd;
          $mainContainer.appendChild($newDiv);
        }
        console.log(result);
      });
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function(event) {
      const idToSearch = $inputById.value;
      console.dir($name);
      charactersAPI.getOneRegister(idToSearch).then(result => {
        console.log(result),
          console.log(result.data[0].name),
          ($name[0].innerText = result.data[0].name),
          ($cartoon[0].innerText = `is cartoon? ${result.data[0].cartoon}`),
          ($occupation[0].innerText = result.data[0].occupation),
          ($weapon[0].innerText = result.data[0].weapon);
      });
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function(event) {});

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function(event) {});

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      console.dir($newChar[3].checked);
      const $newName = $newChar[0].value;
      const $newOcc = $newChar[1].value;
      const $newWea = $newChar[2].value;
      let $isCartoon;
      if ($newChar[3].checked === true) {
        $isCartoon = true;
      } else if ($newChar[3].checked === false) {
        $isCartoon = false;
      }
      charactersAPI.createOneRegister($newName, $newOcc, $newWea, $isCartoon);
      // $isCartoon =
    });
});
