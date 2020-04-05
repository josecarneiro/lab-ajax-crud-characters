const charactersAPI = new APIHandler('http://localhost:8000');
const $charContainer = document.querySelector('.characters-container');
const $deleteOne = document.getElementById('delete-one');
const $createOne = document.querySelector('#new-character-form #send-data');
const $updateOne = document.querySelector('#edit-character-form #send-data');

const createStuff = () => {
  const $info = document.createElement('div');
  $info.className = 'character-info';
  const $name = document.createElement('div'); 
  $name.className = 'name';
  const $occupation = document.createElement('div'); 
  $occupation.className = 'occupation';
  const $cartoon = document.createElement('div'); 
  $cartoon.className = 'cartoon';
  const $weapon = document.createElement('div'); 
  $weapon.className = 'weapon';
  $charContainer.appendChild($info);
  $info.append($name, $occupation, $cartoon, $weapon);
};

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(data => {
      $charContainer.innerHTML = "";
      //console.log(data)
      for (let character of data) {
        $charContainer.innerHTML += 
        `<div class="character-info">
          <div class="name">Character Name:  ${character.name}</div>
          <div class="occupation">Character Occupation:  ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?:  ${character.cartoon}</div>
          <div class="weapon">Character Weapon:  ${character.weapon}</div>
        </div>`;
      }
    })
    .catch(err => {
      console.log('Unable to fetch characters', err);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const charId = document.querySelector('input[name=character-id]').value;
    charactersAPI.getOneRegister(charId)
    .then(response => {     
      $charContainer.innerHTML = "";
      if (response) {
        createStuff();
        document.querySelector('.characters-container .character-info .name').textContent = `Character Name:  ${response.name}`;
        document.querySelector('.characters-container .character-info .occupation').textContent = `Character Occupation:  ${response.occupation}`;
        document.querySelector('.characters-container .character-info .cartoon').textContent = `Is a Cartoon?:  ${response.cartoon}`;
        document.querySelector('.characters-container .character-info .weapon').textContent = `Character Weapon:  ${response.weapon}`;
      }
      else {
        createStuff();
        document.querySelector('.characters-container .character-info .name').textContent = "That character doesn't exist.";
      }
    })
    .catch(err => {      
      console.log('Unable to get character', err);
    });
  });

  $deleteOne.addEventListener('click', function (event) {
    event.preventDefault();
    const charId = document.querySelector('input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(`/${charId}`)
    .then(response => {
      if (charactersAPI.length - 1) {
        //console.log(response.data);
        $deleteOne.style.backgroundColor = "green";
      }
      else {
        $deleteOne.style.backgroundColor = "red";   
      }
    })
    .catch(err => { 
      console.log('Unable to delete character', err);
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
     charactersAPI.createOneRegister({   
       "id": charactersAPI.length + 1,
       "name": document.querySelector('#new-character-form input[name="name"]').value,
       "occupation": document.querySelector('#new-character-form input[name="occupation"]').value,
       "weapon": document.querySelector('#new-character-form input[name="weapon"]').value,
       "cartoon": document.querySelector('#new-character-form input[name="cartoon"]').checked
     })
     .then(response => {
      //console.log(response);
      $createOne.style.backgroundColor = "green";
     })
     .catch(err => {
       $createOne.style.backgroundColor = "red";
      console.log('Unable to create character', err);
     });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const charId = document.querySelector('#edit-character-form .field input[name="chr-id"]').value
    charactersAPI.updateOneRegister(`/${charId}`, {
      "name": document.querySelector('#edit-character-form .field input[name="name"]').value,
      "occupation": document.querySelector('#edit-character-form .field input[name="occupation"]').value,
      "weapon": document.querySelector('#edit-character-form .field input[name="weapon"]').value,
      "cartoon": document.querySelector('#edit-character-form .field input[name="cartoon"]').checked
    })
    .then(response => {
      //console.log(response.data)
      $updateOne.style.backgroundColor = "green";
    })
    .catch(err => {
      $updateOne.style.backgroundColor = "red";
      console.log('Unable to update character', err);
     });
  });
});

/*
I should probably add some extra verification (empty fields and all)
but the code suits its main purpose
*/
