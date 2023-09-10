require('dotenv').config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

  const busquedas = new Busquedas();
  let opt;

  do {

    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const termino = await leerInput('Ciudad: ');
        const lugares = await busquedas.ciudad(termino);
        const id = await listarLugares(lugares);
        if ( id === '0' ) continue;
        const lugarSeleccionado = lugares.find(lugar => lugar.id === id);
        const clima = await busquedas.climaLugar(lugarSeleccionado.lat,
            lugarSeleccionado.lng);

        console.log('\n Información de la ciudad\n'.green);

        console.log('Ciudad:', lugarSeleccionado.nombre);
        console.log('Lng:', lugarSeleccionado.lng);
        console.log('Lat:', lugarSeleccionado.lat);
        console.log('Temperatura:', clima.temp);
        console.log('Mínima:', clima.min);
        console.log('Máxima:', clima.max);
        console.log('Cómo está el clima:', clima.desc);
        break;
    }

    if (opt !== 0) {
      await pausa();
    }

  } while (opt !== 0);
};

main();