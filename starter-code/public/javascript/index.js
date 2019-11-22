const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (e) {
    charactersAPI.getFullList().then(data => {
      console.log(data);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (e) {
    charactersAPI.getOneRegister(e.target.previousElementSibling.value).then(data => {
      console.log(data)
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (e) {
    charactersAPI.deleteOneRegister(e.target.previousElementSibling.value).then(data => {
      console.log(data);
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let elements = e.target.elements;
    const data = {
      name: elements[1].value,
      occupation: elements[2].value,
      weapon: elements[3].value,
      cartoon: elements[4].checked
    }

    charactersAPI.updateOneRegister(elements[0].value, data).then(res => {
      console.log(res);
      elements.forEach(el => {
        el.value = "";
      });
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let elements = e.target.elements;
    const data = {
      name: elements[0].value,
      occupation: elements[1].value,
      weapon: elements[2].value,
      cartoon: elements[3].checked
    }

    charactersAPI.createOneRegister(data).then(res => {
      console.log(res);
      elements.forEach(el => {
        el.value = "";
      });
    });

  });
});
