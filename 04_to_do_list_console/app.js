require('colors');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarTareasBorrar,
  confirm,
  mostrarListadoCheckList
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const {
  leerDB,
  guardarDB
} = require('./helpers/guardarArchivo');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    console.clear();
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        break;
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarPendientesCompletadas(true);
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        const id = await listarTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirm('¿Estás seguro?');
          if (ok) {
            console.log('Tarea borrada: ' + tareas._listado[id].desc);
            tareas.borrarTarea(id);
          }
        }
        break;
      case '0':
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== '0');

};

main();