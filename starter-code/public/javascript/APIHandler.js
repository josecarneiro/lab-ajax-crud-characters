class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.ax = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList () {
    return this.ax.get("/characters").then(res => {
      return res.data;
    });
  }

  getOneRegister (id) {
    return this.ax.get("/characters", {
      params: {
        id: id
      }
    })
    .then(res => {
      return res.data[0];
    });
  }

  createOneRegister (data) {
    return this.getFullList().then(list => {
      console.log(list);
      let id = list.length + 1;
      const { name, occupation, weapon, cartoon } = data;
      return this.ax.post("/characters", {
        id,
        name,
        occupation,
        weapon,
        cartoon
      });
    }).then(res => {
      return res;
    });
  }

  updateOneRegister (id, data) {
    this.ax.patch(`/characters/${id}`, data).then(res => {
      return res;
    })
  }

  deleteOneRegister (id) {
    return this.ax.delete(`/characters/${id}`).then(res => {
      return res;
    })
  }
}
