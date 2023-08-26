const fs = require('fs');

const guardarDB = async( data ) => {
    const pathArchivo = './db/data.json';

    fs.writeFileSync( pathArchivo, JSON.stringify(data));
}

module.exports = guardarDB;