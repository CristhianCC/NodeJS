const fs = require('fs');

const pathArchivo = './db/data.json';
const guardarDB = ( data ) => {
    fs.writeFileSync( pathArchivo, JSON.stringify(data));
}

const leerDB = () => {
    if (!fs.existsSync(pathArchivo)) {
        return null;
    }

    const info = fs.readFileSync(pathArchivo, {encoding: 'utf-8'})
    return JSON.parse( info );
}

module.exports = {
    guardarDB,
    leerDB
};