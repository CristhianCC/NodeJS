setTimeout(() => {
    console.log('Hola Mundo');
}, 1000);


const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    };

    setTimeout( () => {
        callback(usuario);
    }, 1500);
}

getUsuarioByID(10, ({id, nombre}) => {
    console.log(id, nombre.toUpperCase());
});