const {get} = require('axios');
const axios = require('axios');

class Busquedas {
  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      'language': 'es',
      'access_token': '',
      'limit': 5,
    };
  }

  async ciudad(lugar = '') {

    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: this.paramsMapbox,
    });

    const resp = await instance.get();
    console.log(resp.data);

    return []; //retornar los lugares
  }
}

module.exports = Busquedas;