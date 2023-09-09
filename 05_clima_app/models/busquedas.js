const {get} = require('axios');

class Busquedas {
  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor() {
    //TODO: leer DB si existe
  }

  async ciudad(lugar = '') {

    //petición http
    const resp = await get('https://reqres.in/api/users?page=2');
    console.log(resp.data);

    return []; //retornar los lugares
  }
}

module.exports = Busquedas;