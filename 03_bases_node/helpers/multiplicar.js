const fs = require('fs');
const crearArchivo = async (base = 5) => {
    try {
        console.log('====================');
        console.log(`   Tabla del: ${base}`);
        console.log('====================');

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`tabla_${base}.txt`, salida);

        console.log(salida);

        return `tabla_${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};