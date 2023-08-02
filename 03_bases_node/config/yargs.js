const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la table de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la table en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        describe: 'Muestra hasta donde llega la tabla'
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    }).argv;

module.exports = argv;