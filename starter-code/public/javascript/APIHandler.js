class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)    
    .then(function (response) {
      return Promise.resolve(response.data);
    })
    .catch(err => console.log(err));    
  }

  createOneRegister (data) {
    return axios.post(`${this.BASE_URL}/characters`, data)
      .then(function (response) {
        return Promise.resolve(response.data)
      })
      .catch(err => console.log(err));  
  }

  updateOneRegister (id, data) {
    return axios.patch(`${this.BASE_URL}/characters${id}`, data)
    .then(function (response) {
      return Promise.resolve(response.data)
    })
    .catch(err => console.log(err));  
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters${id}`)
    .then(function (response) {
      return Promise.resolve(response.data)
    })
    .catch(err => console.log(err)); 
  }
}