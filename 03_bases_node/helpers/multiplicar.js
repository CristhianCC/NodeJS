const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'cyan',
    help: 'grey',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const crearArchivo = async (base=5, listar, hasta=10) => {
    try {


        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`tabla_${base}.txt`, salida);

        if (listar) {
            console.log('===================='.silly);
            console.log(`   Tabla del: `.silly, colors.verbose(base));
            console.log('===================='.silly);
            console.log(salida.rainbow);
        }

        return `tabla_${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};