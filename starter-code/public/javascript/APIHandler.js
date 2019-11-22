class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`).then(result => {
      return result;
    });
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/`, {
      params: {
        id: id
      }
    });
  }

  createOneRegister(name, occ, weapon, cartoon) {
    axios({
      method: 'post',
      url: `${this.BASE_URL}/characters`,
      data: {
        id: Math.floor(Math.random() * 999),
        name: name,
        occupation: occ,
        weapon: weapon,
        cartoon: cartoon
      }
    });
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
