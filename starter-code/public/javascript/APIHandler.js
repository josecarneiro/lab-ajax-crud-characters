class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.instance = axios.create({
      BASE_URL: `${this.BASE_URL}`
    });
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        return response.data;
      }).catch(function (error) {
        console.log(error);
      });
  }

  getOneRegister(id) {
    this.instance.get(`/characters/ID=${id}`)
      .then(function (response) {
        return Promise.resolve(response.data)
      })
      .catch(function (error) {
        next(err);
      });

  }

  createOneRegister(data) {
    this.instance.post('/characters', data)
      .then(function (response) {
        return Promise.resolve(response.data)
      })
      .catch(function (error) {
        next(err);
      });
  }

  updateOneRegister(id, data) {
    this.instance.patch(`/characters/${id}`, data)
      .then(function (response) {
        return Promise.resolve(response.data)
      })
      .catch(function (error) {
        next(err);
      });
  }

  deleteOneRegister(id) {
    this.instance.delete(`/characters/${id}`)
  }
}